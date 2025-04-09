"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[37371],{94609:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>a,data:()=>n});var i=o(6254);const d={},a=(0,o(32860).A)(d,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[8]||(t[8]=(0,i.Lk)("h1",{id:"custom-devices-diy-dnckatsw004",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#custom-devices-diy-dnckatsw004"},[(0,i.Lk)("span",null,"Custom devices (DiY) DNCKATSW004")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"DNCKATSW004")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Custom%20devices%20(DiY)"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Custom devices (DiY)")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"DNCKAT quadruple key wired wall light switch")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"switch (state), power_on_behavior, action")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DNCKATSW004.png",alt:"Custom devices (DiY) DNCKATSW004"})])],-1))])]),t[9]||(t[9]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p><a href="https://github.com/dzungpv/dnckatsw00x/" target="_blank" rel="noopener noreferrer">DNCKAT quadruple key wired wall light switch</a></p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',3)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,i.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch-bottom-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-left-endpoint"><span>Switch (bottom_left endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_bottom_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom_left&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-bottom-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-right-endpoint"><span>Switch (bottom_right endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_bottom_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom_right&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-1" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-1"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-top-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-top-left-endpoint"><span>Switch (top_left endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_top_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_top_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_top_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_top_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_top_left&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-2" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-2"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-top-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-top-right-endpoint"><span>Switch (top_right endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_top_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_top_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_top_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_top_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_top_right&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-3" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-3"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="power-on-behavior-enum-bottom-left-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-bottom-left-endpoint"><span>Power-on behavior (enum, bottom_left endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_bottom_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_bottom_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_bottom_left&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="power-on-behavior-enum-bottom-right-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-bottom-right-endpoint"><span>Power-on behavior (enum, bottom_right endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_bottom_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_bottom_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_bottom_right&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="power-on-behavior-enum-top-left-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-top-left-endpoint"><span>Power-on behavior (enum, top_left endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_top_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_top_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_top_left&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="power-on-behavior-enum-top-right-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-top-right-endpoint"><span>Power-on behavior (enum, top_right endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_top_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_top_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_top_right&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>release_bottom_left</code>, <code>hold_bottom_left</code>, <code>release_bottom_right</code>, <code>hold_bottom_right</code>, <code>release_top_left</code>, <code>hold_top_left</code>, <code>release_top_right</code>, <code>hold_top_right</code>.</p>',28))])}]]),n=JSON.parse('{"path":"/devices/DNCKATSW004.html","title":"Custom devices (DiY) DNCKATSW004 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Custom devices (DiY) DNCKATSW004 control via MQTT","description":"Integrate your Custom devices (DiY) DNCKATSW004 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (bottom_left endpoint)","slug":"switch-bottom-left-endpoint","link":"#switch-bottom-left-endpoint","children":[]},{"level":3,"title":"Switch (bottom_right endpoint)","slug":"switch-bottom-right-endpoint","link":"#switch-bottom-right-endpoint","children":[]},{"level":3,"title":"Switch (top_left endpoint)","slug":"switch-top-left-endpoint","link":"#switch-top-left-endpoint","children":[]},{"level":3,"title":"Switch (top_right endpoint)","slug":"switch-top-right-endpoint","link":"#switch-top-right-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, bottom_left endpoint)","slug":"power-on-behavior-enum-bottom-left-endpoint","link":"#power-on-behavior-enum-bottom-left-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, bottom_right endpoint)","slug":"power-on-behavior-enum-bottom-right-endpoint","link":"#power-on-behavior-enum-bottom-right-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, top_left endpoint)","slug":"power-on-behavior-enum-top-left-endpoint","link":"#power-on-behavior-enum-top-left-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, top_right endpoint)","slug":"power-on-behavior-enum-top-right-endpoint","link":"#power-on-behavior-enum-top-right-endpoint","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1744136285000},"filePathRelative":"devices/DNCKATSW004.md"}')}}]);