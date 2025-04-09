"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[26190],{15280:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>s,data:()=>i});var n=o(6254);const a={},s=(0,o(32860).A)(a,[["render",function(e,t){const o=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[8]||(t[8]=(0,n.Lk)("h1",{id:"paulmann-501-40",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#paulmann-501-40"},[(0,n.Lk)("span",null,"Paulmann 501.40")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"501.40")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(o,{to:"/supported-devices/#v=Paulmann"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Paulmann")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"RGB remote control")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"battery, action")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/501.40.png",alt:"Paulmann 501.40"})])],-1))])]),t[9]||(t[9]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="documentation" tabindex="-1"><a class="header-anchor" href="#documentation"><span>Documentation</span></a></h3><p>Official documentation by Paulmann is available on their shop site. Check the &quot;<em>Advice &amp; Downloads</em>&quot; section here: https://en.paulmann.com/detail/d6cceca46d334842bd3bd2008204274c</p><h3 id="factory-reset-needed-before-pairing" tabindex="-1"><a class="header-anchor" href="#factory-reset-needed-before-pairing"><span>Factory Reset (needed before pairing)</span></a></h3><p>In order to pair the remote you first need to do a factory reset.</p><ol><li>Hold the &quot;Power&quot; button for 5 seconds until the top LED stays active</li><li>Press the &quot;Power&quot; button 5 times in a row (make sure each press is confirmed via the LED on top)</li><li>The top LED should now blink 3 times confirming the reset</li></ol><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>If this is the first time unpacking the remote, simply remove the battery protector on the back and enable pairing on Zigbee2MQTT, the remote should automatically try to pair.<br> If the remote has already been paired once, you first need to do a factory reset (see above), otherwise it might refuse to pair.</p><ol><li>Hold the &quot;Power&quot; button for 5 seconds until the top LED stays active</li><li>Press the &quot;Fire&quot; button once, the top LED should now be flashing rapidly</li><li>Allow joining on Zigbee2MQTT</li></ol><h3 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting"><span>Troubleshooting</span></a></h3><h4 id="zigbee2mqtt-doesn-t-react-to-button-presses" tabindex="-1"><a class="header-anchor" href="#zigbee2mqtt-doesn-t-react-to-button-presses"><span>Zigbee2MQTT doesn&#39;t react to button presses</span></a></h4><p>The remote might become unresponsive after ~10 minutes and refuses to send out commands. In this case a full factory reset (see section <strong>Factory Reset</strong> above) and re-pairing (see section <strong>Pairing</strong> above) should fix this issue.</p><h4 id="only-the-first-selected-group-receives-commands" tabindex="-1"><a class="header-anchor" href="#only-the-first-selected-group-receives-commands"><span>Only the first selected group receives commands</span></a></h4><p>This seems to be a firmware quirk of the Gent 2, when multiple groups are enabled at the bottom (e.g., 1 and 3) only the first active group (in this example 1) will receive commands. There is currently no fix for this issue unless a firmware update by Paulmann is released. Note: this seems to be fixed at least in devices with firmware 2.7.6_r22 and z2m 2.1 which issues individual actions for each active button.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',15)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,n.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_move_to_level</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_stop</code>, <code>color_temperature_move_stop</code>, <code>color_temperature_move_up</code>, <code>color_temperature_move_down</code>, <code>color_temperature_step_up</code>, <code>color_temperature_step_down</code>, <code>enhanced_move_to_hue_and_saturation</code>, <code>move_to_hue_and_saturation</code>, <code>color_hue_step_up</code>, <code>color_hue_step_down</code>, <code>color_saturation_step_up</code>, <code>color_saturation_step_down</code>, <code>color_loop_set</code>, <code>color_temperature_move</code>, <code>color_move</code>, <code>hue_move</code>, <code>hue_stop</code>, <code>move_to_saturation</code>, <code>move_to_hue</code>, <code>recall</code>, <code>store</code>, <code>add</code>, <code>remove</code>, <code>remove_all</code>.</p>',7))])}]]),i=JSON.parse('{"path":"/devices/501.40.html","title":"Paulmann 501.40 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Paulmann 501.40 control via MQTT","description":"Integrate your Paulmann 501.40 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-09-07T11:16:42.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Documentation","slug":"documentation","link":"#documentation","children":[]},{"level":3,"title":"Factory Reset (needed before pairing)","slug":"factory-reset-needed-before-pairing","link":"#factory-reset-needed-before-pairing","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1744136285000},"filePathRelative":"devices/501.40.md"}')}}]);