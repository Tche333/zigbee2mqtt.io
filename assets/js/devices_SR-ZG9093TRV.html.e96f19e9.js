"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[8294],{61092:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>c,data:()=>i});var d=o(6254);const a={},c=(0,o(32860).A)(a,[["render",function(e,t){const o=(0,d.g2)("RouteLink");return(0,d.uX)(),(0,d.CE)("div",null,[t[8]||(t[8]=(0,d.Lk)("h1",{id:"sunricher-sr-zg9093trv",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#sunricher-sr-zg9093trv"},[(0,d.Lk)("span",null,"Sunricher SR-ZG9093TRV")])],-1)),(0,d.Lk)("table",null,[t[6]||(t[6]=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th"),(0,d.Lk)("th")])],-1)),(0,d.Lk)("tbody",null,[t[2]||(t[2]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Model"),(0,d.Lk)("td",null,"SR-ZG9093TRV")],-1)),(0,d.Lk)("tr",null,[t[1]||(t[1]=(0,d.Lk)("td",null,"Vendor",-1)),(0,d.Lk)("td",null,[(0,d.bF)(o,{to:"/supported-devices/#v=Sunricher"},{default:(0,d.k6)((()=>t[0]||(t[0]=[(0,d.eW)("Sunricher")]))),_:1})])]),t[3]||(t[3]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Description"),(0,d.Lk)("td",null,"Zigbee thermostatic radiator valve")],-1)),t[4]||(t[4]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Exposes"),(0,d.Lk)("td",null,"climate (local_temperature, current_heating_setpoint, local_temperature_calibration, preset, system_mode, running_state), battery, identify, screen_timeout, anti_freezing_temp, temperature_display_mode, window_open_check, hysteresis, window_open_flag, forced_heating_time, error_code, temperature_display_unit, schedule_sunday, schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, child_lock")],-1)),t[5]||(t[5]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Picture"),(0,d.Lk)("td",null,[(0,d.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SR-ZG9093TRV.png",alt:"Sunricher SR-ZG9093TRV"})])],-1))])]),t[9]||(t[9]=(0,d.Lk)("h2",{id:"options",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#options"},[(0,d.Lk)("span",null,"Options")])],-1)),(0,d.Lk)("p",null,[(0,d.Lk)("em",null,[(0,d.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.k6)((()=>t[7]||(t[7]=[(0,d.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,d.Fv)('<ul><li><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>current_heating_setpoint</code>, <code>local_temperature_calibration</code>, <code>preset</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>preset</code>: Preset of the thermostat. Manual: comfort temp (20°C), Auto: schedule temp (see schedule), Away: eco temp (6°C), Sleep: night temp (17°C), Forced: temporary heating with configurable duration (default 300s). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>away</code>, <code>sleep</code>, <code>manual</code>, <code>forced</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>, <code>sleep</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.The minimal value is <code>-30</code> and the maximum value is <code>30</code> with a step size of <code>0.5</code>.</li></ul><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="screen-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#screen-timeout-numeric"><span>Screen timeout (numeric)</span></a></h3><p>Screen Timeout for Inactivity (excluding gateway config). Range: 10-30s, Default: 10s. Value can be found in the published state on the <code>screen_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;screen_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;screen_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>30</code>. The unit of this value is <code>s</code>.</p><h3 id="anti-freezing-temp-numeric" tabindex="-1"><a class="header-anchor" href="#anti-freezing-temp-numeric"><span>Anti freezing temp (numeric)</span></a></h3><p>Anti Freezing(Low Temp) Mode Configuration. 0: disabled, 5~10: temperature (5°C by default). Value can be found in the published state on the <code>anti_freezing_temp</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;anti_freezing_temp&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;anti_freezing_temp&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>°C</code>.</p><h3 id="temperature-display-mode-enum" tabindex="-1"><a class="header-anchor" href="#temperature-display-mode-enum"><span>Temperature display mode (enum)</span></a></h3><p>Temperature Display Mode. 1: displays set temp, 2: displays room temp (default). Value can be found in the published state on the <code>temperature_display_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_display_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_display_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>set_temp</code>, <code>room_temp</code>.</p><h3 id="window-open-check-numeric" tabindex="-1"><a class="header-anchor" href="#window-open-check-numeric"><span>Window open check (numeric)</span></a></h3><p>The temperature threshold for Window Open Detect, value range 0~10, unit is 1°C, 0 means disabled, default value is 5. Value can be found in the published state on the <code>window_open_check</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_open_check&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_open_check&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>°C</code>.</p><h3 id="hysteresis-numeric" tabindex="-1"><a class="header-anchor" href="#hysteresis-numeric"><span>Hysteresis (numeric)</span></a></h3><p>Control hysteresis setting, range is 5-20, unit is 0.1°C, default value is 10. Because the sensor accuracy is 0.5°C, it is recommended not to set this value below 1°C to avoid affecting the battery life.. Value can be found in the published state on the <code>hysteresis</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;hysteresis&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;hysteresis&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>20</code>. The unit of this value is <code>°C</code>.</p><h3 id="window-open-flag-binary" tabindex="-1"><a class="header-anchor" href="#window-open-flag-binary"><span>Window open flag (binary)</span></a></h3><p>Window open flag. Value can be found in the published state on the <code>window_open_flag</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_open_flag&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>opened</code> window open flag is ON, if <code>not_opened</code> OFF.</p><h3 id="forced-heating-time-numeric" tabindex="-1"><a class="header-anchor" href="#forced-heating-time-numeric"><span>Forced heating time (numeric)</span></a></h3><p>Forced heating time, range 10~90, unit is 10s, default value is 30(300s). Value can be found in the published state on the <code>forced_heating_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;forced_heating_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;forced_heating_time&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>90</code>. The unit of this value is <code>10s</code>.</p><h3 id="error-code-enum" tabindex="-1"><a class="header-anchor" href="#error-code-enum"><span>Error code (enum)</span></a></h3><p>Error code: 0=No hardware error, 4=Motor error (detected not running), 5=The motor runs exceeding the self-check time without finding the boundary. Value can be found in the published state on the <code>error_code</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;error_code&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>no_error</code>, <code>motor_error</code>, <code>motor_timeout</code>.</p><h3 id="temperature-display-unit-enum" tabindex="-1"><a class="header-anchor" href="#temperature-display-unit-enum"><span>Temperature display unit (enum)</span></a></h3><p>The temperature unit shown on the display. Value can be found in the published state on the <code>temperature_display_unit</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_display_unit&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_display_unit&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="schedule-sunday-text" tabindex="-1"><a class="header-anchor" href="#schedule-sunday-text"><span>Schedule sunday (text)</span></a></h3><p>Schedule for Sunday, example: &quot;06:00/21.0 12:00/21.0 18:00/21.0 22:00/16.0&quot;. Value can be found in the published state on the <code>schedule_sunday</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;schedule_sunday&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_sunday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-monday-text" tabindex="-1"><a class="header-anchor" href="#schedule-monday-text"><span>Schedule monday (text)</span></a></h3><p>Schedule for Monday, example: &quot;06:00/21.0 12:00/21.0 18:00/21.0 22:00/16.0&quot;. Value can be found in the published state on the <code>schedule_monday</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;schedule_monday&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_monday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-tuesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-tuesday-text"><span>Schedule tuesday (text)</span></a></h3><p>Schedule for Tuesday, example: &quot;06:00/21.0 12:00/21.0 18:00/21.0 22:00/16.0&quot;. Value can be found in the published state on the <code>schedule_tuesday</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;schedule_tuesday&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_tuesday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-wednesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-wednesday-text"><span>Schedule wednesday (text)</span></a></h3><p>Schedule for Wednesday, example: &quot;06:00/21.0 12:00/21.0 18:00/21.0 22:00/16.0&quot;. Value can be found in the published state on the <code>schedule_wednesday</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;schedule_wednesday&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_wednesday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-thursday-text" tabindex="-1"><a class="header-anchor" href="#schedule-thursday-text"><span>Schedule thursday (text)</span></a></h3><p>Schedule for Thursday, example: &quot;06:00/21.0 12:00/21.0 18:00/21.0 22:00/16.0&quot;. Value can be found in the published state on the <code>schedule_thursday</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;schedule_thursday&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_thursday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-friday-text" tabindex="-1"><a class="header-anchor" href="#schedule-friday-text"><span>Schedule friday (text)</span></a></h3><p>Schedule for Friday, example: &quot;06:00/21.0 12:00/21.0 18:00/21.0 22:00/16.0&quot;. Value can be found in the published state on the <code>schedule_friday</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;schedule_friday&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_friday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-saturday-text" tabindex="-1"><a class="header-anchor" href="#schedule-saturday-text"><span>Schedule saturday (text)</span></a></h3><p>Schedule for Saturday, example: &quot;06:00/21.0 12:00/21.0 18:00/21.0 22:00/16.0&quot;. Value can be found in the published state on the <code>schedule_saturday</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;schedule_saturday&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_saturday&quot;: NEW_VALUE}</code>.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;child_lock&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p>',43))])}]]),i=JSON.parse('{"path":"/devices/SR-ZG9093TRV.html","title":"Sunricher SR-ZG9093TRV control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sunricher SR-ZG9093TRV control via MQTT","description":"Integrate your Sunricher SR-ZG9093TRV via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-03-01T20:31:41.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"Screen timeout (numeric)","slug":"screen-timeout-numeric","link":"#screen-timeout-numeric","children":[]},{"level":3,"title":"Anti freezing temp (numeric)","slug":"anti-freezing-temp-numeric","link":"#anti-freezing-temp-numeric","children":[]},{"level":3,"title":"Temperature display mode (enum)","slug":"temperature-display-mode-enum","link":"#temperature-display-mode-enum","children":[]},{"level":3,"title":"Window open check (numeric)","slug":"window-open-check-numeric","link":"#window-open-check-numeric","children":[]},{"level":3,"title":"Hysteresis (numeric)","slug":"hysteresis-numeric","link":"#hysteresis-numeric","children":[]},{"level":3,"title":"Window open flag (binary)","slug":"window-open-flag-binary","link":"#window-open-flag-binary","children":[]},{"level":3,"title":"Forced heating time (numeric)","slug":"forced-heating-time-numeric","link":"#forced-heating-time-numeric","children":[]},{"level":3,"title":"Error code (enum)","slug":"error-code-enum","link":"#error-code-enum","children":[]},{"level":3,"title":"Temperature display unit (enum)","slug":"temperature-display-unit-enum","link":"#temperature-display-unit-enum","children":[]},{"level":3,"title":"Schedule sunday (text)","slug":"schedule-sunday-text","link":"#schedule-sunday-text","children":[]},{"level":3,"title":"Schedule monday (text)","slug":"schedule-monday-text","link":"#schedule-monday-text","children":[]},{"level":3,"title":"Schedule tuesday (text)","slug":"schedule-tuesday-text","link":"#schedule-tuesday-text","children":[]},{"level":3,"title":"Schedule wednesday (text)","slug":"schedule-wednesday-text","link":"#schedule-wednesday-text","children":[]},{"level":3,"title":"Schedule thursday (text)","slug":"schedule-thursday-text","link":"#schedule-thursday-text","children":[]},{"level":3,"title":"Schedule friday (text)","slug":"schedule-friday-text","link":"#schedule-friday-text","children":[]},{"level":3,"title":"Schedule saturday (text)","slug":"schedule-saturday-text","link":"#schedule-saturday-text","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]}]}],"git":{"updatedTime":1744136285000},"filePathRelative":"devices/SR-ZG9093TRV.md"}')}}]);