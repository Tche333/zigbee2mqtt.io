
*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docgen/device_page_notes.js)*

# Device

| Model | PLUG EDP RE:DY  |
| Vendor  | EDP  |
| Description | re:dy plug |
| Supports | on/off, power measurement |
| Picture | ![../images/devices/PLUG-EDP-RE-DY.jpg](../images/devices/PLUG-EDP-RE-DY.jpg) |

## Notes


### Pairing
Factory reset the plug (hold the switch button for >10sec). After resetting the switch will automatically connect.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possbile with the following configuration:


### PLUG EDP RE:DY
{% raw %}
```yaml
switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "Watt"
    icon: "mdi:flash"
    value_template: "{{ value_json.power }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


