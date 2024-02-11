import { storageAvailable } from "./storage";

if (storageAvailable('localStorage')) {
    // Storage available
} else {
    // Storage not available.
}