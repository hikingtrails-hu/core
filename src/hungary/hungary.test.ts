import { describe, expect, it } from '@jest/globals'
import { Hungary } from './hungary'

describe('hungary', () => {
    it('bounds are set up', () => {
        const { northEast, southWest } = Hungary.bounds
        ;[northEast, southWest].forEach((bound) => {
            expect(bound.lat).toBeGreaterThan(45)
            expect(bound.lat).toBeLessThan(49)
            expect(bound.lon).toBeGreaterThan(16)
            expect(bound.lon).toBeLessThan(23)
        })
    })
})
