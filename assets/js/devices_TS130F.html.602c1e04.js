"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[27547],{85391:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>l,data:()=>n});var a=t(6254);const i={},l=(0,t(32860).A)(i,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[9]||(o[9]=(0,a.Lk)("h1",{id:"tuya-ts130f",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-ts130f"},[(0,a.Lk)("span",null,"Tuya TS130F")])],-1)),(0,a.Lk)("table",null,[o[7]||(o[7]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"TS130F")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("Tuya")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Curtain/blind switch")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"cover (state, position), moving, motor_reversal, calibration, calibration_time, indicator_mode, backlight_mode")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS130F.png",alt:"Tuya TS130F"})])],-1)),o[6]||(o[6]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"White-label"),(0,a.Lk)("td",null,"LoraTap SC400")],-1))])]),o[10]||(o[10]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press on stop button for 10 seconds to enter pairing mode</p><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration"><span>Calibration</span></a></h3><ul><li>Press the open button on the switch, wait until the curtains are completely open.</li><li>Press the pause button on the switch.</li><li>Put the device into calibration mode, see <a href="#calibration-binary">below</a>.</li><li>Press the close button on the switch, wait until curtains are fully closed.</li><li>Press the pause button on the switch.</li><li>Disable the calibration mode, see <a href="#calibration-binary">below</a>.</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',6)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[8]||(o[8]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[11]||(o[11]=(0,a.Fv)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="moving-enum" tabindex="-1"><a class="header-anchor" href="#moving-enum"><span>Moving (enum)</span></a></h3><p>Value can be found in the published state on the <code>moving</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>UP</code>, <code>STOP</code>, <code>DOWN</code>.</p><h3 id="motor-reversal-binary" tabindex="-1"><a class="header-anchor" href="#motor-reversal-binary"><span>Motor reversal (binary)</span></a></h3><p>Value can be found in the published state on the <code>motor_reversal</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motor_reversal&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_reversal&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> motor reversal is ON, if <code>OFF</code> OFF.</p><h3 id="calibration-binary" tabindex="-1"><a class="header-anchor" href="#calibration-binary"><span>Calibration (binary)</span></a></h3><p>Value can be found in the published state on the <code>calibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> calibration is ON, if <code>OFF</code> OFF.</p><h3 id="calibration-time-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-time-numeric"><span>Calibration time (numeric)</span></a></h3><p>Calibration time. Value can be found in the published state on the <code>calibration_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>s</code>.</p><h3 id="indicator-mode-enum" tabindex="-1"><a class="header-anchor" href="#indicator-mode-enum"><span>Indicator mode (enum)</span></a></h3><p>LED indicator mode. Value can be found in the published state on the <code>indicator_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>off/on</code>, <code>on/off</code>, <code>on</code>.</p><h3 id="backlight-mode-binary" tabindex="-1"><a class="header-anchor" href="#backlight-mode-binary"><span>Backlight mode (binary)</span></a></h3><p>Mode of the backlight. Value can be found in the published state on the <code>backlight_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;backlight_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_mode&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> backlight mode is ON, if <code>OFF</code> OFF.</p>',16))])}]]),n=JSON.parse('{"path":"/devices/TS130F.html","title":"Tuya TS130F control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS130F control via MQTT","description":"Integrate your Tuya TS130F via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-11-01T12:47:02.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Calibration","slug":"calibration","link":"#calibration","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Moving (enum)","slug":"moving-enum","link":"#moving-enum","children":[]},{"level":3,"title":"Motor reversal (binary)","slug":"motor-reversal-binary","link":"#motor-reversal-binary","children":[]},{"level":3,"title":"Calibration (binary)","slug":"calibration-binary","link":"#calibration-binary","children":[]},{"level":3,"title":"Calibration time (numeric)","slug":"calibration-time-numeric","link":"#calibration-time-numeric","children":[]},{"level":3,"title":"Indicator mode (enum)","slug":"indicator-mode-enum","link":"#indicator-mode-enum","children":[]},{"level":3,"title":"Backlight mode (binary)","slug":"backlight-mode-binary","link":"#backlight-mode-binary","children":[]}]}],"git":{"updatedTime":1744136285000},"filePathRelative":"devices/TS130F.md"}')}}]);