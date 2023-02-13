import { base } from '$app/paths'
import type { RangeIndices, TObject } from '$lib/types'

export const isBrowser: boolean = typeof window !== 'undefined' && typeof document !== 'undefined'
export const userAgent: string = isBrowser ? window.navigator.userAgent : ''
export const isFirefox: boolean = isBrowser
    && (userAgent.indexOf(' Firefox/') !== -1 || userAgent.indexOf(' Gecko/') !== -1)
export const runningAsExtension: boolean = !(
    typeof globalThis != 'object'
    || typeof chrome != 'object'
    || !chrome
    || !chrome.runtime
    || !chrome.runtime.id
)
export const hasClipboardItem: boolean = typeof ClipboardItem !== 'undefined'
export const getWdtElement = () => document.querySelector('.wdt') as HTMLElement
export const getInput = () => document.getElementById('wdtInput') as HTMLTextAreaElement
export const focusInput = (): void => getInput()?.focus()
export const fontsLoaded = async (): Promise<FontFaceSet> => await document.fonts.ready

export function classMap(classArray: (string | { [k: string]: any })[]): string {
    const classes: string[] = []
    classArray.forEach(el => {
        // noinspection TypeScriptValidateTypes
        classes.push(typeof el === 'string'
            ? el
            : Object.entries(el)
                .filter(([name, value]) => name !== '' && value)
                .map(([name]) => name)
                .join(' ')
        )
    })

    return classes.join(' ')
}

export function resizeTypeSelectorIfPresent() {
    // https://stackoverflow.com/a/67240166/409179
    let target = document.querySelector('.wdt-input select') as HTMLSelectElement
    if (!target) return

    let tempSelect = target.cloneNode() as HTMLSelectElement,
        tempOption = document.createElement('option')

    tempOption.textContent = target.options[target.selectedIndex].text
    tempSelect.style.width = 'auto'
    tempSelect.style.visibility = 'hidden'
    tempSelect.style.position = 'fixed'
    tempSelect.appendChild(tempOption)
    target.after(tempSelect)
    target.style.width = `${tempSelect.getBoundingClientRect().width}px`
    target.classList.remove('unloaded')
    tempSelect.remove()
}

export function handleWindowResize(rect?: DOMRectReadOnly | null) {
    rect && window.resizeBy(
        Math.ceil(rect.width - window.innerWidth),
        Math.ceil(rect.height - window.innerHeight)
    )
}

export async function createPopoutWindow() {
    if (!runningAsExtension) return

    const href = chrome.runtime.getURL('index.html')
    const rect = getWdtElement().getBoundingClientRect()
    const [initialW, initialH] = [rect.width + 30, rect.height + 50]

    if (isFirefox) {
        window.open(href, 'devToolboxPopout', `resizable,width=${initialW},height=${initialH}`)
    } else {
        await chrome.windows.create({
            url: href,
            type: 'popup',
            width: Math.ceil(initialW),
            height: Math.ceil(initialH),
        })
    }

    window.close()
}

export function* chunkify<T>(arr: T[], n: number): Generator<T[]> {
    for (let i = 0; i < arr.length; i += n) {
        yield arr.slice(i, i + n)
    }
}

export function scrollToTopById(id: string) {
    let eDiv = document.getElementById(id)
    if (eDiv) eDiv.scrollTop = 0
}

export function urlTo(path: string = '') {
    return base.replace(/\/+$/, '') + '/' + path.replace(/^\/+/, '')
}

const deepGet = (obj: TObject | null, path: string[]) => {
    let length = path.length
    for (let i = 0; i < length; i++) {
        if (obj == null) return undefined
        obj = obj[path[i]]
    }

    return length ? obj : undefined
}

export const dotGet = (object: TObject, path?: string, defaultValue?: any) => {
    if (path == null) return object
    let value = deepGet(object, path.split('.'))

    return value === undefined ? defaultValue : value
}

// Credit: Alex Irabor, https://onecompiler.com/javascript/3xbjgxv4r
export function mergeOverlappingRanges(array: RangeIndices) {
    if (!array.length) return array

    let sortedIntervals = array.sort((a, b) => a[0] - b[0])
    let mergedIntervals = []
    let currentInterval = sortedIntervals[0]

    mergedIntervals.push(currentInterval)

    for (let nextInterval of sortedIntervals) {
        const [_, currentIntervalEnd] = currentInterval
        const [nextIntervalStart, nextIntervalEnd] = nextInterval

        if (currentIntervalEnd >= nextIntervalStart) {
            currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd)
        } else {
            currentInterval = nextInterval
            mergedIntervals.push(currentInterval)
        }
    }

    return mergedIntervals
}
