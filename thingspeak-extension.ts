// Define el namespace de la extensión
namespace thingspeak {
    /**
     * Obtiene el último valor de un campo específico de un canal en Thingspeak.
     * @param channelID El ID del canal de Thingspeak.
     * @param fieldID El ID del campo a leer (e.g., 1).
     * @param apiKey La clave de lectura de la API de Thingspeak.
     */
    //% block="get last value from Thingspeak channel %channelID| field %fieldID| read API Key %apiKey"
    //% group="IoT"
    //% weight=100
    export function readField(channelID: number, fieldID: number, apiKey: string): string {
        let url = "https://api.thingspeak.com/channels/" + channelID + "/fields/" + fieldID + "/last.json";
        let headers = "X-THINGSPEAKAPIKEY: " + apiKey;

        // Utilizamos una función de solicitud GET de la librería iot-bit (asumiendo que existe)
        let response = iotbit.httpGet(url, headers);

        if (response) {
            // El IoT:bit responde con una cadena. Usamos MakeCode para encontrar el valor.
            let startKey = '"field' + fieldID + '":';
            let startIndex = response.indexOf(startKey);

            if (startIndex !== -1) {
                let valueStartIndex = response.indexOf('"', startIndex + startKey.length);
                if (valueStartIndex !== -1) {
                    let valueEndIndex = response.indexOf('"', valueStartIndex + 1);
                    if (valueEndIndex !== -1) {
                        return response.substring(valueStartIndex + 1, valueEndIndex);
                    }
                }
            }
        }
        return ""; // Retorna una cadena vacía en caso de error
    }
}
