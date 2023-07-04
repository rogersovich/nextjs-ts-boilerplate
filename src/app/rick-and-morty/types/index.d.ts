export interface BaseResponseCharacters {
  info: Info
  results: ResultBase[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: null
}

export type enumStatus = "Alive" | "Dead" | "unknown"
export type enumGender = "Female" | "Male" | "Genderless" | "unknown"
export interface ResultBase {
  id: number
  name: string
  status: enumStatus
  species: string
  type: string
  gender: enumGender
  origin: Location
  location: Location
  image: string
  episode: string[]
  url: string
  created: Date
}

export interface Location {
  name: string
  url: string
}

export type TFilterCharacters = {
  page?: string
  name?: string
  status?: enumStatus
  species?: string
  type?: string
  gender?: enumGender
}
