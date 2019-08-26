import {CameraProps, RoverProps} from "../rovers/RoverTypes";

export interface ImageProps {
    id: number,
    sol: number,
    camera: CameraProps,
    img_src: string,
    earth_date: string,
    rover: RoverProps
}