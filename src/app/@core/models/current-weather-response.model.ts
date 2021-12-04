import { Current } from "./current.model";
import { Location } from "./location.model";

export interface CurrentWeatherResponse {
    location: Location;
    current: Current;
}
