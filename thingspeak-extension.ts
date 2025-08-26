// Define el namespace de la extensión
namespace thingspeak {
    /**
     * Obtiene el último valor de un campo específico de un canal en Thingspeak.
     * @param channelID El ID del canal de Thingspeak.
     * @param fieldID El ID del campo a leer (e.g., 1).
     * @param apiKey La clave de lectura de la API de Thingspeak.
     */
    // Define el bloque en MakeCode
    //% block="get last value from Thingspeak channel %channelID| field %fieldID| read API Key %apiKey"
    //% group="IoT"
    //% weight=100
    export function readField(channelID: number, fieldID: number, apiKey: string): string {
        let url = "https://api.thingspeak.com/channels/" + channelID + "/fields/" + fieldID + "/last.json";
        let headers = "X-THINGSPEAKAPIKEY: " + apiKey;

        // Esto simula la solicitud GET. La implementación real dependerá de la biblioteca del ESP8266.
        // Asumimos que la biblioteca subyacente de ESP8266 tiene una función para solicitudes HTTP GET.
        // El bloque `dht11_dht22.requestData` o similar en otras librerías puede ser un buen punto de partida.
        
        let response = ""; // Aquí se almacenaría la respuesta de la solicitud GET

        // --- Código ficticio para ilustrar la lógica, ya que la implementación real depende del hardware/firmware ---
        // Por ejemplo, usando una función de una librería de ESP8266
        // response = iotbit.httpGet(url, headers);
        
        // Suponiendo que la respuesta es un JSON como {"created_at":"...","entry_id":...,"field1":"..."}
        // Analizamos el JSON para obtener el valor del campo
        let start = response.indexOf("\"field" + fieldID + "\":\"");
        if (start === -1) {
            return "";
        }
        start += 8 + fieldID.toString().length;
        let end = response.indexOf("\"", start);
        if (end === -1) {
            return "";
        }
        return response.substring(start, end);
    }
}