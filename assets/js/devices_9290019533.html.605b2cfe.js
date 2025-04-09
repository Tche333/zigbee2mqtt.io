"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[97085],{48237:(e,s,n)=>{n.r(s),n.d(s,{comp:()=>a,data:()=>i});var o=n(6254);const t={},a=(0,n(32860).A)(t,[["render",function(e,s){const n=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[s[11]||(s[11]=(0,o.Lk)("h1",{id:"philips-9290019533",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#philips-9290019533"},[(0,o.Lk)("span",null,"Philips 9290019533")])],-1)),(0,o.Lk)("table",null,[s[6]||(s[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[s[2]||(s[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"9290019533")],-1)),(0,o.Lk)("tr",null,[s[1]||(s[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(n,{to:"/supported-devices/#v=Philips"},{default:(0,o.k6)((()=>s[0]||(s[0]=[(0,o.eW)("Philips")]))),_:1})])]),s[3]||(s[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Hue white ambiance GU10 with Bluetooth")],-1)),s[4]||(s[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"light (state, brightness, color_temp, color_temp_startup), power_on_behavior, effect")],-1)),s[5]||(s[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/9290019533.png",alt:"Philips 9290019533"})])],-1))])]),s[12]||(s[12]=(0,o.Fv)('<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>\n<span class="line">Attribute Value | Description</span>\n<span class="line">----------------|-----------------------------------------------</span>\n<span class="line">default         | reset to factory default value</span>\n<span class="line">on              | bulb on after power loss with configured brightness, color-temperature and color</span>\n<span class="line">off             | bulb off after power loss</span>\n<span class="line">recover         | last running state after power loss</span>\n<span class="line"></span>\n<span class="line">Rules:</span>\n<span class="line">- `hue_power_on_behavior` value always has to be provided</span>\n<span class="line">- `hue_power_on_brightness`, `hue_power_on_color_temperature` and `hue_power_on_color` can only be provided when `hue_power_on_behavior` = `on`</span>\n<span class="line">- `hue_power_on_color_temperature` and `hue_power_on_color` cannot be provided together, only one can be set</span>\n<span class="line">- When setting `hue_power_on_behavior` = `on`, any not provided values will be reset to their factory defaults</span>\n<span class="line"></span>\n<span class="line">Note: if `hue_power_on_behavior` is set to `off`, then the only way to turn the bulb on will be through a paired smart device (see pairing above). You will NOT be able to turn the bulb on by sequentially switching power on and off.</span>\n<span class="line">&lt;!-- Notes END: Do not edit below this line --&gt;</span>\n<span class="line"></span>\n<span class="line">## Pairing</span>\n<span class="line">New lights are automatically in pairing mode. </span>\n<span class="line">Factory resetting a Hue light can be accomplished in 6 ways which are described below. After resetting the light will automatically connect.</span>\n<span class="line"></span>\n<span class="line">### Power Cycling</span>\n<span class="line"></span>\n<span class="line">Repeat 5 times, starting with the bulb on:</span>\n<span class="line"></span>\n<span class="line">- Turn off for 2 seconds, turn on for 8 seconds</span>\n<span class="line"></span>\n<span class="line">The light will pulse when factory reset and allow joining on Z2M</span>\n<span class="line"></span>\n<span class="line">Source: [Reddit](https://www.reddit.com/r/Hue/comments/vznv5q/hue_bulb_hardware_reset_only_bulb_required/)</span>\n<span class="line">Verification: [GitHub PR Comment](https://github.com/Koenkk/zigbee2mqtt.io/pull/2965#issuecomment-2406964209)</span>\n<span class="line"></span>\n<span class="line">### Touchlink factory reset</span>\n<span class="line">See [Touchlink](../guide/usage/touchlink.md)</span>\n<span class="line"></span>\n<span class="line">### Hue bridge</span>\n<span class="line">When the light is still connected to the Hue bridge, you can simply factory reset the light</span>\n<span class="line">by removing it from the bridge via the Hue app. Orphaned lights (configured to connect to a non-existing Zigbee network) can be adopted by a Hue bridge by entering the 6 character serial number in the Philips Hue app.</span>\n<span class="line"></span>\n<span class="line">### Hue dimmer switch</span>\n<span class="line">With [one](./324131092621.md) of the [two](./929002398602.md) Hue Dimmer switches it is possible to put the lights into a factory reset.</span>\n<span class="line"></span>\n<span class="line">1. Powercycle the light (if the bulb is on for too long this procedure might not work)</span>\n<span class="line">2. Bring the dimmer switch next to the light, as close as possible</span>\n<span class="line">3. Hold the I/On and 0/Off button pressed simultaneously for 10 to 12 seconds until…</span>\n<span class="line">4. The light flashes a couple of times. Don&#39;t release the buttons until the last flash + a safety second</span>\n<span class="line">5. Switch the light off and on again: it can now be paired again.</span>\n<span class="line"></span>\n<span class="line">See also the [VIDEO: Factory reset a Hue bulb with Hue dimmer switch](https://www.youtube.com/watch?v=qvlEAELiJKs).</span>\n<span class="line"></span>\n<span class="line">### Bluetooth (if supported by device)</span>\n<span class="line">Install the Philips Hue Bluetooth app for [Android](https://play.google.com/store/apps/details?id=com.signify.hue.blue)</span>\n<span class="line">or [iOS](https://apps.apple.com/us/app/philips-hue-bluetooth/id1456604186). You can use the app to trigger a factory reset on a paired light. (Note: The light will only be in bluetooth pairing</span>\n<span class="line">mode for a couple of minutes after power-on)</span>\n<span class="line"></span>\n<span class="line">### TRADFRI remote control</span>\n<span class="line">This may also be possible with the</span>\n<span class="line">[Tradfri Remote Control](https://www.ikea.com/us/en/images/products/tradfri-remote-control__0489469_PE623665_S4.JPG)</span>\n<span class="line">by pressing and holding the reset button on the bottom of the remote (next to the battery).</span>\n<span class="line">[This may not always work, even if the Hue bulb starts flashing](https://github.com/Koenkk/zigbee2mqtt/issues/296#issuecomment-416923751).</span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line">## Power-on behavior</span>\n<span class="line">This device allows you to set the power-on behavior. Note that this requires at least November/December &#39;18 firmware update of the device.</span>\n<span class="line">Send a MQTT command to [`zigbee2mqtt/FRIENDLY_NAME/set`](../guide/usage/mqtt_topics_and_messages.md#zigbee2mqtt-friendly-name-set) with the following payload.</span>\n<span class="line"></span>\n<span class="line">```js</span>\n<span class="line">{</span>\n<span class="line">    &quot;hue_power_on_behavior&quot;: &quot;on&quot;,          // default, on, off, recover</span>\n<span class="line">    &quot;hue_power_on_brightness&quot;: 125,         // same values as brightness</span>\n<span class="line">    &quot;hue_power_on_color_temperature&quot;: 280,  // same values as color_temp</span>\n<span class="line">    &quot;hue_power_on_color&quot;: &quot;#0000FF&quot;         // color in hex notation, e.g. #0000FF = blue</span>\n<span class="line">}</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Attribute Value</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>reset to factory default value</td></tr><tr><td>on</td><td>bulb on after power loss with configured brightness, color-temperature and color</td></tr><tr><td>off</td><td>bulb off after power loss</td></tr><tr><td>recover</td><td>last running state after power loss</td></tr></tbody></table><p>Rules:</p><ul><li><code>hue_power_on_behavior</code> value always has to be provided</li><li><code>hue_power_on_brightness</code>, <code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> can only be provided when <code>hue_power_on_behavior</code> = <code>on</code></li><li><code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> cannot be provided together, only one can be set</li><li>When setting <code>hue_power_on_behavior</code> = <code>on</code>, any not provided values will be reset to their factory defaults</li></ul><p>Note: if <code>hue_power_on_behavior</code> is set to <code>off</code>, then the only way to turn the bulb on will be through a paired smart device (see pairing above). You will NOT be able to turn the bulb on by sequentially switching power on and off.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',6)),(0,o.Lk)("p",null,[s[8]||(s[8]=(0,o.eW)("This device supports OTA updates, for more information see ")),(0,o.bF)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,o.k6)((()=>s[7]||(s[7]=[(0,o.eW)("OTA updates")]))),_:1}),s[9]||(s[9]=(0,o.eW)("."))]),s[13]||(s[13]=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>s[10]||(s[10]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),s[14]||(s[14]=(0,o.Fv)('<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>color_sync</code>: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>color_temp</code>, <code>color_temp_startup</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li><li><code>color_temp</code>: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color_temp&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>153</code> and <code>454</code>, the higher the warmer the color. To read the color temperature send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color_temp&quot;: &quot;&quot;}</code>. Besides the numeric values the following values are accepted: <code>coolest</code>, <code>cool</code>, <code>neutral</code>, <code>warm</code>, <code>warmest</code>.</li><li><code>color_temp_startup</code>: To set the startup color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color_temp_startup&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>153</code> and <code>454</code>, the higher the warmer the color. To read the startup color temperature send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color_temp_startup&quot;: &quot;&quot;}</code>. Besides the numeric values the following values are accepted: <code>coolest</code>, <code>cool</code>, <code>neutral</code>, <code>warm</code>, <code>warmest</code>, <code>previous</code>.</li></ul><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the light will not answer to other on with timed off commands. Support depends on the light firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition"><span>Transition</span></a></h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping"><span>Moving/stepping</span></a></h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span></span>\n<span class="line">  <span class="token string-property property">&quot;color_temp_move&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving color temperature up at 60 units per second</span></span>\n<span class="line">  <span class="token string-property property">&quot;color_temp_move&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stop&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving color temperature</span></span>\n<span class="line">  <span class="token string-property property">&quot;color_temp_step&quot;</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token comment">// Increase color temperature by 99</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="effect-enum" tabindex="-1"><a class="header-anchor" href="#effect-enum"><span>Effect (enum)</span></a></h3><p>Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;effect&quot;: NEW_VALUE}</code>. The possible values are: <code>blink</code>, <code>breathe</code>, <code>okay</code>, <code>channel_change</code>, <code>candle</code>, <code>finish_effect</code>, <code>stop_effect</code>, <code>stop_hue_effect</code>.</p>',19))])}]]),i=JSON.parse('{"path":"/devices/9290019533.html","title":"Philips 9290019533 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Philips 9290019533 control via MQTT","description":"Integrate your Philips 9290019533 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-11-09T18:37:38.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Power-on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Effect (enum)","slug":"effect-enum","link":"#effect-enum","children":[]}]}],"git":{"updatedTime":1744136285000},"filePathRelative":"devices/9290019533.md"}')}}]);