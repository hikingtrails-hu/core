export type LatLon = {
    lat: number
    lon: number
}

export type Point = LatLon & {
    elevation: number
}

export type Delta = {
    distance: number
    rise: number
    descent: number
}

export type PathNode = HasDeltaFromPrevious & {
    point: Point
}

export type HasDeltaFromPrevious = {
    delta: Delta
}

export type Path = {
    nodes: PathNode[]
    checkpoints: CheckPoint[]
}

export type OnPath = {
    nodeIdx: number
}

export type CheckPoint = OnPath & {
    name: string
    locations: Location[]
}

export type Measured = {
    distance: number
}

export type Location = Measured &
    OnPath & {
        name: string
        description: string
        position: Point
        id: string
    }

export type Trail = {
    path: Path
    name: string
    key: string
}
