import {RoverProps} from "../rovers/RoverTypes";

export interface CameraSelectorProps {
    selectedRover: RoverProps,
    selectCamera: (cameraName: string | undefined) => void
}

export interface EarthDateSelectorProps {
    earthDate: string,
    selectedRover: RoverProps,
    selectEarthDate: (earthDate: string | undefined) => void
}

export interface SolDateSelectorProps {
    solDate: string,
    selectedRover: RoverProps,
    selectSolDate: (solDate: string | undefined) => void
}

export interface formReducerProps {
    dateType: string,
    roverName: string,
    earthDate: string,
    solDate: number,
    camera: string,
    selectedRover: RoverProps
}