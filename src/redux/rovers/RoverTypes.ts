export interface RoverProps {
    id: number,
    name: string,
    landing_date: string,
    launch_date: string,
    status: string,
    max_sol: string,
    max_date: string,
    total_photos: number,
    cameras: CameraProps[]
}

export interface CameraProps {
    full_name: string,
    id: number,
    name: string,
    rover_id: number
}