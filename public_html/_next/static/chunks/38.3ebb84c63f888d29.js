!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="47f1b70e-a3a2-411f-a7bc-f5ed0ebac813",e._sentryDebugIdIdentifier="sentry-dbid-47f1b70e-a3a2-411f-a7bc-f5ed0ebac813")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{25054:function(e){e.exports={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],i=e%100;return"["+e+(t[(i-20)%10]||t[i]||"th")+"]"}}},84110:function(e){e.exports=function(e,t,i){e=e||{};var r=t.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(e,t,i,o){return r.fromToBase(e,t,i,o)}i.en.relativeTime=o,r.fromToBase=function(t,r,a,n,s){for(var l,c,u,d=a.$locale().relativeTime||o,p=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=p.length,g=0;g<h;g+=1){var w=p[g];w.d&&(l=n?i(t).diff(a,w.d,!0):a.diff(t,w.d,!0));var f=(e.rounding||Math.round)(Math.abs(l));if(u=l>0,f<=w.r||!w.r){f<=1&&g>0&&(w=p[g-1]);var m=d[w.l];s&&(f=s(""+f)),c="string"==typeof m?m.replace("%d",f):m(f,r,w.l,u);break}}if(r)return c;var v=u?d.future:d.past;return"function"==typeof v?v(c):v.replace("%s",c)},r.to=function(e,t){return a(e,t,this,!0)},r.from=function(e,t){return a(e,t,this)};var n=function(e){return e.$u?i.utc():i()};r.toNow=function(e){return this.to(n(this),e)},r.fromNow=function(e){return this.from(n(this),e)}}},70660:function(e){e.exports=function(e,t,i){i.updateLocale=function(e,t){var r=i.Ls[e];if(r)return(t?Object.keys(t):[]).forEach(function(e){r[e]=t[e]}),r}}},10038:function(e,t,i){"use strict";i.r(t),i.d(t,{WalletConnectModal:function(){return rF}});var r,o,a,n=i(77548),s=i(49117),l=i(29974),c=i(54222),u=i(26983);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let d=e=>e??u.Ld;var p=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let h=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=n.Ni.state.address,this.balanceVal=n.Ni.state.balance,this.balanceSymbol=n.Ni.state.balanceSymbol,this.profileName=n.Ni.state.profileName,this.profileImage=n.Ni.state.profileImage,this.network=n.fB.state.caipNetwork,this.isUnsupportedChain=n.fB.state.isUnsupportedChain,this.unsubscribe.push(...[n.Ni.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),n.fB.subscribeKey("caipNetwork",e=>{this.network=e}),n.fB.subscribeKey("isUnsupportedChain",e=>{this.isUnsupportedChain=e})])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=n.fz.getNetworkImage(this.network),t="show"===this.balance;return l.dy`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${d(this.address)}
        profileName=${d(this.profileName)}
        networkSrc=${d(e)}
        avatarSrc=${d(this.profileImage)}
        balance=${t?n.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?n.IN.open({view:"UnsupportedChain"}):n.IN.open()}};p([(0,c.Cb)({type:Boolean})],h.prototype,"disabled",void 0),p([(0,c.Cb)()],h.prototype,"balance",void 0),p([(0,c.Cb)()],h.prototype,"charsStart",void 0),p([(0,c.Cb)()],h.prototype,"charsEnd",void 0),p([(0,c.SB)()],h.prototype,"address",void 0),p([(0,c.SB)()],h.prototype,"balanceVal",void 0),p([(0,c.SB)()],h.prototype,"balanceSymbol",void 0),p([(0,c.SB)()],h.prototype,"profileName",void 0),p([(0,c.SB)()],h.prototype,"profileImage",void 0),p([(0,c.SB)()],h.prototype,"network",void 0),p([(0,c.SB)()],h.prototype,"isUnsupportedChain",void 0),h=p([(0,s.customElement)("w3m-account-button")],h);var g=l.iv`
  :host {
    display: block;
    width: max-content;
  }
`,w=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let f=class extends l.oi{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=n.Ni.state.isConnected,this.isLoading=n.IN.state.loading}firstUpdated(){this.unsubscribe.push(n.Ni.subscribeKey("isConnected",e=>{this.isAccount=e}),n.IN.subscribeKey("loading",e=>{this.isLoading=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount&&!this.isLoading?l.dy`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${d(this.balance)}
            .charsStart=${d(this.charsStart)}
            .charsEnd=${d(this.charsEnd)}
          >
          </w3m-account-button>
        `:l.dy`
          <w3m-connect-button
            size=${d(this.size)}
            label=${d(this.label)}
            loadingLabel=${d(this.loadingLabel)}
          ></w3m-connect-button>
        `}};f.styles=g,w([(0,c.Cb)({type:Boolean})],f.prototype,"disabled",void 0),w([(0,c.Cb)()],f.prototype,"balance",void 0),w([(0,c.Cb)()],f.prototype,"size",void 0),w([(0,c.Cb)()],f.prototype,"label",void 0),w([(0,c.Cb)()],f.prototype,"loadingLabel",void 0),w([(0,c.Cb)()],f.prototype,"charsStart",void 0),w([(0,c.Cb)()],f.prototype,"charsEnd",void 0),w([(0,c.SB)()],f.prototype,"isAccount",void 0),w([(0,c.SB)()],f.prototype,"isLoading",void 0),f=w([(0,s.customElement)("w3m-button")],f);var m=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let v=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=n.IN.state.open,this.loading=n.IN.state.loading,this.unsubscribe.push(n.IN.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.loading||this.open;return l.dy`
      <wui-connect-button
        size=${d(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?n.IN.close():this.loading||n.IN.open()}};m([(0,c.Cb)()],v.prototype,"size",void 0),m([(0,c.Cb)()],v.prototype,"label",void 0),m([(0,c.Cb)()],v.prototype,"loadingLabel",void 0),m([(0,c.SB)()],v.prototype,"open",void 0),m([(0,c.SB)()],v.prototype,"loading",void 0),v=m([(0,s.customElement)("w3m-connect-button")],v);var b=l.iv`
  :host {
    display: block;
    width: max-content;
  }
`,y=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let x=class extends l.oi{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.network=n.fB.state.caipNetwork,this.connected=n.Ni.state.isConnected,this.loading=n.IN.state.loading,this.isUnsupportedChain=n.fB.state.isUnsupportedChain}firstUpdated(){this.unsubscribe.push(...[n.fB.subscribeKey("caipNetwork",e=>this.network=e),n.Ni.subscribeKey("isConnected",e=>this.connected=e),n.IN.subscribeKey("loading",e=>this.loading=e),n.fB.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l.dy`
      <wui-network-button
        data-testid="w3m-network-button"
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${d(n.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.label?this.label:this.isUnsupportedChain?"Switch Network":this.network?this.network.name:this.connected?"Unknown Network":"Select Network"}onClick(){this.loading||(n.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"}),n.IN.open({view:"Networks"}))}};x.styles=b,y([(0,c.Cb)({type:Boolean})],x.prototype,"disabled",void 0),y([(0,c.Cb)({type:String})],x.prototype,"label",void 0),y([(0,c.SB)()],x.prototype,"network",void 0),y([(0,c.SB)()],x.prototype,"connected",void 0),y([(0,c.SB)()],x.prototype,"loading",void 0),y([(0,c.SB)()],x.prototype,"isUnsupportedChain",void 0),x=y([(0,s.customElement)("w3m-network-button")],x);var C=l.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,k=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let T=class extends l.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=n.Pc.state.view,this.unsubscribe.push(n.Pc.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{let t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return l.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"AccountSettings":return l.dy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return l.dy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return l.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return l.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return l.dy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return l.dy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return l.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return l.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return l.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return l.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return l.dy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return l.dy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return l.dy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return l.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return l.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return l.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return l.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return l.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return l.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return l.dy`<w3m-profile-view></w3m-profile-view>`;case"SelectAddresses":return l.dy`<w3m-select-addresses-view></w3m-select-addresses-view>`;case"SwitchAddress":return l.dy`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return l.dy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return l.dy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return l.dy`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return l.dy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return l.dy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return l.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return l.dy`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return l.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return l.dy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return l.dy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return l.dy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return l.dy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return l.dy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return l.dy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return l.dy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return l.dy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return l.dy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return l.dy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return l.dy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return l.dy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return l.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return l.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return l.dy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`}}async onViewChange(e){n.fw.hide();let{history:t}=n.Pc.state,i=-10,r=10;t.length<this.prevHistoryLength&&(i=10,r=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${i}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${r}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};T.styles=C,k([(0,c.SB)()],T.prototype,"view",void 0),T=k([(0,s.customElement)("w3m-router")],T);var S=l.iv`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`,A=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let _={USD:"$",EUR:"€",GBP:"\xa3"},E=[100,250,500,1e3],$=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=n.Ni.state.isConnected,this.loading=n.IN.state.loading,this.paymentCurrency=n.ph.state.paymentCurrency,this.paymentAmount=n.ph.state.paymentAmount,this.purchaseAmount=n.ph.state.purchaseAmount,this.quoteLoading=n.ph.state.quotesLoading,this.unsubscribe.push(...[n.Ni.subscribeKey("isConnected",e=>{this.connected=e}),n.IN.subscribeKey("loading",e=>{this.loading=e}),n.ph.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading})])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l.dy`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${E.map(e=>l.dy`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${_[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?l.dy`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:l.dy`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||n.IN.open({view:"OnRampProviders"})}openModal(){n.IN.open({view:"Connect"})}async onPaymentAmountChange(e){n.ph.setPaymentAmount(Number(e.detail)),await n.ph.getQuote()}async selectPresetAmount(e){n.ph.setPaymentAmount(e),await n.ph.getQuote()}};$.styles=S,A([(0,c.Cb)({type:Boolean})],$.prototype,"disabled",void 0),A([(0,c.SB)()],$.prototype,"connected",void 0),A([(0,c.SB)()],$.prototype,"loading",void 0),A([(0,c.SB)()],$.prototype,"paymentCurrency",void 0),A([(0,c.SB)()],$.prototype,"paymentAmount",void 0),A([(0,c.SB)()],$.prototype,"purchaseAmount",void 0),A([(0,c.SB)()],$.prototype,"quoteLoading",void 0),$=A([(0,s.customElement)("w3m-onramp-widget")],$);var R=i(69043),P=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let N=class extends l.oi{constructor(){super(),this.usubscribe=[],this.networkImages=n.WM.state.networkImages,this.address=n.Ni.state.address,this.profileImage=n.Ni.state.profileImage,this.profileName=n.Ni.state.profileName,this.network=n.fB.state.caipNetwork,this.preferredAccountType=n.Ni.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(...[n.Ni.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):n.IN.close()}),n.Ni.subscribeKey("preferredAccountType",e=>this.preferredAccountType=e),n.fB.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)})])}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-settings-view: No account provided");let e=this.networkImages[this.network?.imageId??""],t=this.profileName?.split(".")[0];return l.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${d(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${t?s.UiHelperUtil.getTruncateString({string:t,charsStart:20,charsEnd:0,truncate:"end"}):s.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${d(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){let e=n.MO.getConnectedConnector(),t=n.AA.getAuthConnector();return!t||"AUTH"!==e||this.profileName?null:l.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){let e=n.MO.getConnectedConnector(),t=n.AA.getAuthConnector(),{origin:i}=location;return!t||"AUTH"!==e||i.includes(n.bq.SECURE_SITE)?null:l.dy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){let e=n.fB.getRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find(({id:e})=>e===this.network?.id);return t||!i}onCopyAddress(){try{this.profileName?(n.j1.copyToClopboard(this.profileName),n.KC.showSuccess("Name copied")):this.address&&(n.j1.copyToClopboard(this.address),n.KC.showSuccess("Address copied"))}catch{n.KC.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){let e=n.fB.checkIfSmartAccountEnabled(),t=n.MO.getConnectedConnector(),i=n.AA.getAuthConnector();return i&&"AUTH"===t&&e?(this.switched||(this.text=this.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),l.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){n.Pc.push("ChooseAccountName")}async changePreferredAccountType(){let e=n.fB.checkIfSmartAccountEnabled(),t=this.preferredAccountType!==R.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&e?R.y_.ACCOUNT_TYPES.SMART_ACCOUNT:R.y_.ACCOUNT_TYPES.EOA,i=n.AA.getAuthConnector();i&&(this.loading=!0,await n.lZ.setPreferredAccountType(t),this.text=t===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,n.Si.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&n.Pc.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await n.lZ.disconnect(),n.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),n.IN.close()}catch{n.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),n.KC.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){n.Xs.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),n.Pc.push("UpgradeEmailWallet")}};P([(0,c.SB)()],N.prototype,"address",void 0),P([(0,c.SB)()],N.prototype,"profileImage",void 0),P([(0,c.SB)()],N.prototype,"profileName",void 0),P([(0,c.SB)()],N.prototype,"network",void 0),P([(0,c.SB)()],N.prototype,"preferredAccountType",void 0),P([(0,c.SB)()],N.prototype,"disconnecting",void 0),P([(0,c.SB)()],N.prototype,"loading",void 0),P([(0,c.SB)()],N.prototype,"switched",void 0),P([(0,c.SB)()],N.prototype,"text",void 0),N=P([(0,s.customElement)("w3m-account-settings-view")],N);let I=class extends l.oi{render(){let e=n.MO.getConnectedConnector(),t=n.AA.getAuthConnector();return l.dy`
      ${t?.walletFeatures&&"AUTH"===e?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return l.dy`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return l.dy`<w3m-account-default-widget></w3m-account-default-widget>`}};I=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-account-view")],I);var O=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let D=class extends l.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=n.j1.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return l.dy`
      <wui-flex .padding=${["0","s","s","s"]} gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?l.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:l.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return n.j1.isMobile()?l.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){n.Pc.push("ConnectingWalletConnect")}};O([(0,c.SB)()],D.prototype,"search",void 0),D=O([(0,s.customElement)("w3m-all-wallets-view")],D);var j=l.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`,U=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let B=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=n.ph.state.selectedProvider,this.uri=n.lZ.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[n.ph.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})]),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);let t=this.error?"Buy can be declined from your side or due to and error on the provider app":`We’ll notify you once your Buy is processed`;return l.dy`
      <wui-flex
        data-error=${d(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${d(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){this.selectedOnRampProvider&&"coinbase"===this.selectedOnRampProvider.name&&(this.startTime=Date.now(),this.initializeCoinbaseTransactions())}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{let e=n.Ni.state.address,t=n.hD.state.projectId;if(!e)throw Error("No address found");let i=await n.Lr.fetchTransactions({account:e,onramp:"coinbase",projectId:t}),r=i.data.filter(e=>new Date(e.metadata.minedAt)>new Date(this.startTime)||"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status);r.length?(clearInterval(this.intervalId),n.Pc.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){n.KC.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,n.j1.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?l.dy`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){let e=n.u0.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return l.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url){n.KC.showError("No link found"),n.Pc.goBack();return}try{n.j1.copyToClopboard(this.selectedOnRampProvider.url),n.KC.showSuccess("Link copied")}catch{n.KC.showError("Failed to copy")}}};B.styles=j,U([(0,c.SB)()],B.prototype,"intervalId",void 0),U([(0,c.SB)()],B.prototype,"selectedOnRampProvider",void 0),U([(0,c.SB)()],B.prototype,"uri",void 0),U([(0,c.SB)()],B.prototype,"ready",void 0),U([(0,c.SB)()],B.prototype,"showRetry",void 0),U([(0,c.SB)()],B.prototype,"buffering",void 0),U([(0,c.SB)()],B.prototype,"error",void 0),U([(0,c.SB)()],B.prototype,"startTime",void 0),U([(0,c.Cb)({type:Boolean})],B.prototype,"isMobile",void 0),U([(0,c.Cb)()],B.prototype,"onRetry",void 0),B=U([(0,s.customElement)("w3m-buy-in-progress-view")],B);var M=l.iv`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }
`,L=i(47655),z=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let W=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.connectors=n.AA.state.connectors,this.unsubscribe.push(n.AA.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l.dy`
      <wui-flex flexDirection="column" .padding=${["3xs","s","s","s"]}>
        <w3m-email-login-widget></w3m-email-login-widget>
        <w3m-social-login-widget></w3m-social-login-widget>
        ${this.walletListTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletListTemplate(){let e=this.connectors.find(e=>"AUTH"===e.type);return e?.socials?e?.showWallets?l.dy`
          <wui-flex flexDirection="column" gap="xs" .margin=${["xs","0","0","0"]}>
            <w3m-connector-list></w3m-connector-list>
            <wui-flex class="all-wallets">
              <w3m-all-wallets-widget></w3m-all-wallets-widget>
            </wui-flex>
          </wui-flex>
        `:l.dy`<wui-list-button
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:l.dy`<w3m-wallet-login-list></w3m-wallet-login-list>`}onContinueWalletClick(){n.Pc.push("ConnectWallets")}};W.styles=M,z([(0,L.S)()],W.prototype,"connectors",void 0),W=z([(0,s.customElement)("w3m-connect-view")],W);let Z={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",WALLET_STANDARD_CONNECTOR_ID:"announced",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",AUTH_CONNECTOR_ID:"w3mAuth",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},VERSION:"5.0.11"},H={ConnectorExplorerIds:{[Z.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Z.COINBASE_SDK_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Z.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[Z.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ConnectorImageIds:{[Z.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Z.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Z.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[Z.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[Z.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[Z.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[Z.INJECTED_CONNECTOR_ID]:"Browser Wallet",[Z.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[Z.COINBASE_CONNECTOR_ID]:"Coinbase",[Z.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[Z.LEDGER_CONNECTOR_ID]:"Ledger",[Z.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[Z.INJECTED_CONNECTOR_ID]:"INJECTED",[Z.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[Z.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[Z.AUTH_CONNECTOR_ID]:"AUTH"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]};(r=a||(a={})).Google="google",r.Github="github",r.Apple="apple",r.Facebook="facebook",r.X="x",r.Discord="discord",r.Farcaster="farcaster";var V=l.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,F=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};class Y extends l.oi{constructor(){super(),this.wallet=n.Pc.state.data?.wallet,this.connector=n.Pc.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=n.fz.getWalletImage(this.wallet)??n.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=n.lZ.state.wcUri,this.error=n.lZ.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[n.lZ.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),n.lZ.subscribeKey("wcError",e=>this.error=e),n.lZ.subscribeKey("buffering",e=>this.buffering=e)])}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),l.dy`
      <wui-flex
        data-error=${d(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${d(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          size="md"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?l.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(n.lZ.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let e=n.u0.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return l.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(n.j1.copyToClopboard(this.uri),n.KC.showSuccess("Link copied"))}catch{n.KC.showError("Failed to copy")}}}Y.styles=V,F([(0,c.SB)()],Y.prototype,"uri",void 0),F([(0,c.SB)()],Y.prototype,"error",void 0),F([(0,c.SB)()],Y.prototype,"ready",void 0),F([(0,c.SB)()],Y.prototype,"showRetry",void 0),F([(0,c.SB)()],Y.prototype,"buffering",void 0),F([(0,c.Cb)({type:Boolean})],Y.prototype,"isMobile",void 0),F([(0,c.Cb)()],Y.prototype,"onRetry",void 0);let K=class extends Y{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");n.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&n.MO.setConnectedWalletImageUrl(this.connector.imageUrl),this.connector.id===Z.COINBASE_SDK_CONNECTOR_ID&&this.error||(await n.lZ.connectExternal(this.connector),n.hD.state.isSiweEnabled?n.Pc.push("ConnectingSiwe"):n.IN.close(),n.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}})))}catch(e){n.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};K=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-connecting-external-view")],K);var q=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let G=class extends l.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=n.Pc.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),n.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),l.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):l.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{let{wcPairingExpiry:t}=n.lZ.state;if(e||n.j1.isPairingExpired(t)){if(this.wallet){let e=n.fz.getWalletImage(this.wallet);e&&n.MO.setConnectedWalletImageUrl(e)}else{let e=n.AA.state.connectors,t=e.find(e=>"WALLET_CONNECT"===e.type),i=n.fz.getConnectorImage(t);i&&n.MO.setConnectedWalletImageUrl(i)}if(await n.lZ.connectWalletConnect(),this.finalizeConnection(),"AUTH"===n.MO.getConnectedConnector()&&n.hD.state.hasMultipleAddresses)n.Pc.push("SelectAddresses");else if(n.hD.state.isSiweEnabled){let{SIWEController:e}=await Promise.all([i.e(9585),i.e(6822)]).then(i.bind(i,38042));"success"===e.state.status?n.IN.close():n.Pc.push("ConnectingSiwe")}else n.IN.close()}}catch(e){n.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),n.lZ.setWcError(!0),n.j1.isAllowedRetry(this.lastRetry)&&(n.KC.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:e,recentWallet:t}=n.lZ.state;e&&n.MO.setWalletConnectDeepLink(e),t&&n.MO.setWeb3ModalRecent(t),n.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:this.wallet?.name||"Unknown"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:i,injected:r,rdns:o}=this.wallet,a=r?.map(({injected_id:e})=>e).filter(Boolean),s=o?[o]:a??[],l=!n.hD.state.isUniversalProvider&&s.length,c=n.lZ.checkInstalled(s),u=l&&c,d=t&&!n.j1.isMobile();u&&this.platforms.push("browser"),e&&this.platforms.push(n.j1.isMobile()?"mobile":"qrcode"),i&&this.platforms.push("web"),d&&this.platforms.push("desktop"),!u&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return l.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return l.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return l.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return l.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return l.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return l.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){let e=this.platforms.length>1;return e?l.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};q([(0,c.SB)()],G.prototype,"platform",void 0),q([(0,c.SB)()],G.prototype,"platforms",void 0),G=q([(0,s.customElement)("w3m-connecting-wc-view")],G);var X=l.iv`
  .continue-button-container {
    width: 100%;
  }
`,Q=i(92361),J=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ee=class extends l.oi{constructor(){super(...arguments),this.loading=!1}render(){return l.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{n.j1.openHref(Q.UE.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l.dy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l.dy`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){n.Pc.push("RegisterAccountName"),n.Xs.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:n.Ni.state.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}};ee.styles=X,J([(0,c.SB)()],ee.prototype,"loading",void 0),ee=J([(0,s.customElement)("w3m-choose-account-name-view")],ee);let et=class extends l.oi{constructor(){super(...arguments),this.wallet=n.Pc.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return l.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?l.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?l.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?l.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?l.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&n.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&n.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&n.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&n.j1.openHref(this.wallet.homepage,"_blank")}};et=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-downloads-view")],et);let ei=class extends l.oi{render(){return l.dy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{n.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=n.QT.state,{customWallets:i}=n.hD.state,r=[...t,...i??[],...e].slice(0,4);return r.map(e=>l.dy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${d(n.fz.getWalletImage(e))}
          @click=${()=>{n.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};ei=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-get-wallet-view")],ei);var er=l.iv`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{I:eo}=u.Al,ea=e=>void 0===e.strings,en={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6};class es{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this.t=e,this._$AM=t,this.i=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let el=(e,t)=>{let i=e._$AN;if(void 0===i)return!1;for(let e of i)e._$AO?.(t,!1),el(e,t);return!0},ec=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===i?.size)},eu=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),eh(t)}};function ed(e){void 0!==this._$AN?(ec(this),this._$AM=e,eu(this)):this._$AM=e}function ep(e,t=!1,i=0){let r=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size){if(t){if(Array.isArray(r))for(let e=i;e<r.length;e++)el(r[e],!1),ec(r[e]);else null!=r&&(el(r,!1),ec(r))}else el(this,e)}}let eh=e=>{e.type==en.CHILD&&(e._$AP??=ep,e._$AQ??=ed)};class eg extends es{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),eu(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(el(this,e),ec(this))}setValue(e){if(ea(this.t))this.t._$AI(e,this);else{let t=[...this.t._$AH];t[this.i]=e,this.t._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ew=()=>new ef;class ef{}let em=new WeakMap,ev=(o=class extends eg{render(e){return u.Ld}update(e,[t]){let i=t!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),u.Ld}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.Y){let t=this.ht??globalThis,i=em.get(t);void 0===i&&(i=new WeakMap,em.set(t,i)),void 0!==i.get(this.Y)&&this.Y.call(this.ht,void 0),i.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?em.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}},(...e)=>({_$litDirective$:o,values:e}));var eb=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ey=class extends l.oi{constructor(){super(),this.formRef=ew(),this.usubscribe=[],this.name="",this.error="",this.loading=n.a.state.loading,this.suggestions=n.a.state.suggestions,this.registered=!1,this.profileName=n.Ni.state.profileName,this.onDebouncedNameInputChange=n.j1.debounce(e=>{n.a.validateName(e)?(this.error="",this.name=e,n.a.getSuggestions(e),n.a.isNameRegistered(e).then(e=>{this.registered=e})):e.length<4?this.error="Name must be at least 4 characters long":this.error="Can only contain letters, numbers and - characters"}),this.usubscribe.push(...[n.a.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading}),n.Ni.subscribeKey("profileName",e=>{this.profileName=e,e&&(this.error="You already own a name")})])}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach(e=>e()),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return l.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${ev(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){let e=this.isAllowedToSubmit();return e?l.dy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        `:null}onSelectSuggestion(e){return()=>{this.name=e,this.registered=!1,this.requestUpdate()}}onNameInputChange(e){this.onDebouncedNameInputChange(e.detail)}nameSuggestionTagTemplate(){return this.loading?l.dy`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`:this.registered?l.dy`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:l.dy`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){if(!this.name||this.name.length<4||this.error)return null;let e=this.registered?this.suggestions.filter(e=>e.name!==this.name):[];return l.dy`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        .padding=${["m","m","m","m"]}
        justifyContent="space-between"
        class="suggestion"
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${e.map(e=>this.availableNameTemplate(e.name))}
    </wui-flex>`}availableNameTemplate(e){return l.dy` <wui-flex
      .padding=${["m","m","m","m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(e)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${e}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`}isAllowedToSubmit(){return!this.loading&&!this.registered&&!this.error&&!this.profileName&&n.a.validateName(this.name)}async onSubmitName(){try{if(!this.isAllowedToSubmit())return;n.Xs.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:n.Ni.state.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name}}),await n.a.registerName(this.name),n.Xs.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:n.Ni.state.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name}})}catch(e){n.KC.showError(e.message),n.Xs.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:n.Ni.state.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name,error:e?.message||"Unknown error"}})}}onEnterKey(e){"Enter"===e.key&&this.isAllowedToSubmit()&&this.onSubmitName()}};ey.styles=er,eb([(0,c.Cb)()],ey.prototype,"errorMessage",void 0),eb([(0,c.SB)()],ey.prototype,"name",void 0),eb([(0,c.SB)()],ey.prototype,"error",void 0),eb([(0,c.SB)()],ey.prototype,"loading",void 0),eb([(0,c.SB)()],ey.prototype,"suggestions",void 0),eb([(0,c.SB)()],ey.prototype,"registered",void 0),eb([(0,c.SB)()],ey.prototype,"profileName",void 0),ey=eb([(0,s.customElement)("w3m-register-account-name-view")],ey);var ex=l.iv`
  .continue-button-container {
    width: 100%;
  }
`;let eC=class extends l.oi{render(){return l.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{n.j1.openHref(Q.UE.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l.dy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l.dy`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){n.Pc.replace("Account")}};eC.styles=ex,eC=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-register-account-name-success-view")],eC);var ek=l.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;let eT={onNetworkChange:async()=>{if(n.hD.state.isSiweEnabled){let{SIWEController:e}=await Promise.all([i.e(9585),i.e(6822)]).then(i.bind(i,38042));e.state._client?.options?.signOutOnNetworkChange?await e.signOut():n._4.navigateAfterNetworkSwitch()}else n._4.navigateAfterNetworkSwitch()}};var eS=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let eA=class extends l.oi{constructor(){super(),this.network=n.Pc.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.getLabel(),t=this.getSubLabel();return l.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${d(n.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:l.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){let e=n.MO.getConnectedConnector(),t=n.AA.getAuthConnector();return t&&"AUTH"===e?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){let e=n.MO.getConnectedConnector(),t=n.AA.getAuthConnector();return t&&"AUTH"===e?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await n.fB.switchActiveNetwork(this.network),await eT.onNetworkChange())}catch{this.error=!0}}};eA.styles=ek,eS([(0,c.SB)()],eA.prototype,"showRetry",void 0),eS([(0,c.SB)()],eA.prototype,"error",void 0),eA=eS([(0,s.customElement)("w3m-network-switch-view")],eA);var e_=l.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,eE=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let e$=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=n.fB.state.caipNetwork,this.requestedCaipNetworks=n.fB.getRequestedCaipNetworks(),this.unsubscribe.push(n.fB.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){n.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),n.Pc.push("WhatIsANetwork")}networksTemplate(){let e=n.fB.getRequestedCaipNetworks(),t=n.fB.state.approvedCaipNetworkIds,i=n.fB.state.supportsAllNetworks,r=n.j1.sortRequestedNetworks(t,e);return r?.map(e=>l.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===e.id}
          imageSrc=${d(n.fz.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${!i&&!t?.includes(e.id)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-card-select>
      `)}async onSwitchNetwork(e){let t=n.Ni.state.isConnected,i=n.fB.state.approvedCaipNetworkIds,r=n.fB.state.supportsAllNetworks,o=n.fB.state.caipNetwork,a=n.Pc.state.data;t&&o?.id!==e.id?i?.includes(e.id)?(await n.fB.switchActiveNetwork(e),await eT.onNetworkChange()):r&&n.Pc.push("SwitchNetwork",{...a,network:e}):t||(n.fB.setCaipNetwork(e),n.Pc.push("Connect"))}};e$.styles=e_,eE([(0,c.SB)()],e$.prototype,"caipNetwork",void 0),eE([(0,c.SB)()],e$.prototype,"requestedCaipNetworks",void 0),e$=eE([(0,s.customElement)("w3m-networks-view")],e$);var eR=l.iv`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`,eP=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let eN=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=n.ph.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=n.sl.state.coinbaseTransactions,this.tokenImages=n.WM.state.tokenImages,this.unsubscribe.push(...[n.ph.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),n.WM.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},n.sl.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})]),n.sl.clearCursor(),this.fetchTransactions()}render(){return l.dy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e?.map(e=>{let t=Q.Em.formatDate(e?.metadata?.minedAt),i=e.transfers[0],r=i?.fungible_info;if(!r)return null;let o=r?.icon?.url||this.tokenImages?.[r.symbol||""];return l.dy`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${"ONRAMP_TRANSACTION_STATUS_SUCCESS"===e.metadata.status}
          .inProgress=${"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status}
          .failed=${"ONRAMP_TRANSACTION_STATUS_FAILED"===e.metadata.status}
          purchaseCurrency=${d(r.symbol)}
          purchaseValue=${i.quantity.numeric}
          date=${t}
          icon=${d(o)}
          symbol=${d(r.symbol)}
        ></w3m-onramp-activity-item>
      `})}templateTransactionsByYear(){let e=Object.keys(this.coinbaseTransactions).sort().reverse();return e.map(e=>{let t=parseInt(e,10),i=Array(12).fill(null).map((e,t)=>t).reverse();return i.map(e=>{let i=s.TransactionUtil.getTransactionGroupTitle(t,e),r=this.coinbaseTransactions[t]?.[e];return r?l.dy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${i}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(r)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){let e=n.Ni.state.address,t=n.hD.state.projectId;if(!e)throw Error("No address found");if(!t)throw Error("No projectId found");this.loading=!0,await n.sl.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){let e=new Date,t=this.coinbaseTransactions[e.getFullYear()]?.[e.getMonth()]||[],i=t.filter(e=>"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status);if(0===i.length){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{let e=n.Ni.state.address;await n.sl.fetchTransactions(e,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(7).fill(l.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};eN.styles=eR,eP([(0,c.SB)()],eN.prototype,"selectedOnRampProvider",void 0),eP([(0,c.SB)()],eN.prototype,"loading",void 0),eP([(0,c.SB)()],eN.prototype,"coinbaseTransactions",void 0),eP([(0,c.SB)()],eN.prototype,"tokenImages",void 0),eN=eP([(0,s.customElement)("w3m-onramp-activity-view")],eN);var eI=l.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,eO=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let eD=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=n.ph.state.paymentCurrency,this.currencies=n.ph.state.paymentCurrencies,this.currencyImages=n.WM.state.currencyImages,this.unsubscribe.push(...[n.ph.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),n.WM.subscribeKey("currencyImages",e=>this.currencyImages=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l.dy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map(e=>l.dy`
        <wui-list-item
          imageSrc=${d(this.currencyImages?.[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(e){e&&(n.ph.setPaymentCurrency(e),n.IN.close())}};eD.styles=eI,eO([(0,c.SB)()],eD.prototype,"selectedCurrency",void 0),eO([(0,c.SB)()],eD.prototype,"currencies",void 0),eO([(0,c.SB)()],eD.prototype,"currencyImages",void 0),eD=eO([(0,s.customElement)("w3m-onramp-fiat-select-view")],eD);var ej=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let eU=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.providers=n.ph.state.providers,this.unsubscribe.push(...[n.ph.subscribeKey("providers",e=>{this.providers=e})])}firstUpdated(){let e=this.providers.map(async e=>"coinbase"===e.name?await this.getCoinbaseOnRampURL():Promise.resolve(e?.url));Promise.all(e).then(e=>{this.providers=this.providers.map((t,i)=>({...t,url:e[i]||""}))})}render(){return l.dy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.map(e=>l.dy`
        <w3m-onramp-provider-item
          label=${e.label}
          name=${e.name}
          feeRange=${e.feeRange}
          @click=${()=>{this.onClickProvider(e)}}
          ?disabled=${!e.url}
        ></w3m-onramp-provider-item>
      `)}onClickProvider(e){n.ph.setSelectedProvider(e),n.Pc.push("BuyInProgress"),n.j1.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes"),n.Xs.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:n.Ni.state.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}async getCoinbaseOnRampURL(){let e=n.Ni.state.address,t=n.fB.state.caipNetwork;if(!e)throw Error("No address found");if(!t?.name)throw Error("No network found");let i=n.bq.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??n.bq.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,r=n.ph.state.purchaseCurrency,o=r?[r.symbol]:n.ph.state.purchaseCurrencies.map(e=>e.symbol);return await n.Lr.generateOnRampURL({defaultNetwork:i,destinationWallets:[{address:e,blockchains:n.bq.WC_COINBASE_PAY_SDK_CHAINS,assets:o}],partnerUserId:e,purchaseAmount:n.ph.state.purchaseAmount})}};ej([(0,c.SB)()],eU.prototype,"providers",void 0),eU=ej([(0,s.customElement)("w3m-onramp-providers-view")],eU);var eB=l.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,eM=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let eL=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=n.ph.state.purchaseCurrencies,this.tokens=n.ph.state.purchaseCurrencies,this.tokenImages=n.WM.state.tokenImages,this.unsubscribe.push(...[n.ph.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),n.WM.subscribeKey("tokenImages",e=>this.tokenImages=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l.dy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map(e=>l.dy`
        <wui-list-item
          imageSrc=${d(this.tokenImages?.[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(e){e&&(n.ph.setPurchaseCurrency(e),n.IN.close())}};eL.styles=eB,eM([(0,c.SB)()],eL.prototype,"selectedCurrency",void 0),eM([(0,c.SB)()],eL.prototype,"tokens",void 0),eM([(0,c.SB)()],eL.prototype,"tokenImages",void 0),eL=eM([(0,s.customElement)("w3m-onramp-token-select-view")],eL);var ez=l.iv`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`,eW=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let eZ=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!1,this.caipNetworkId=n.fB.state.caipNetwork?.id,this.initialized=n.nY.state.initialized,this.loadingQuote=n.nY.state.loadingQuote,this.loadingPrices=n.nY.state.loadingPrices,this.loadingTransaction=n.nY.state.loadingTransaction,this.sourceToken=n.nY.state.sourceToken,this.sourceTokenAmount=n.nY.state.sourceTokenAmount,this.sourceTokenPriceInUSD=n.nY.state.sourceTokenPriceInUSD,this.toToken=n.nY.state.toToken,this.toTokenAmount=n.nY.state.toTokenAmount,this.toTokenPriceInUSD=n.nY.state.toTokenPriceInUSD,this.inputError=n.nY.state.inputError,this.gasPriceInUSD=n.nY.state.gasPriceInUSD,this.fetchError=n.nY.state.fetchError,this.onDebouncedGetSwapCalldata=n.j1.debounce(async()=>{await n.nY.swapTokens()},200),n.fB.subscribeKey("caipNetwork",e=>{this.caipNetworkId!==e?.id&&(this.caipNetworkId=e?.id,n.nY.resetState(),n.nY.initializeState())}),this.unsubscribe.push(...[n.IN.subscribeKey("open",e=>{e||n.nY.resetState()}),n.Pc.subscribeKey("view",e=>{e.includes("Swap")||n.nY.resetValues()}),n.nY.subscribe(e=>{this.initialized=e.initialized,this.loadingQuote=e.loadingQuote,this.loadingPrices=e.loadingPrices,this.loadingTransaction=e.loadingTransaction,this.sourceToken=e.sourceToken,this.sourceTokenAmount=e.sourceTokenAmount,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError,this.gasPriceInUSD=e.gasPriceInUSD,this.fetchError=e.fetchError})])}firstUpdated(){n.nY.initializeState(),this.watchTokensAndValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e?.()),clearInterval(this.interval)}render(){return l.dy`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval(()=>{n.nY.getNetworkTokenPrice(),n.nY.getMyTokensWithBalance(),n.nY.swapTokens()},1e4)}templateSwap(){return l.dy`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":this.sourceToken&&this.toToken?this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount":"Select token"}templateReplaceTokensButton(){return l.dy`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return l.dy`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(e,t){let i=n.nY.state.myTokensWithBalance?.find(e=>e?.address===t?.address),r="toToken"===e?this.toTokenAmount:this.sourceTokenAmount,o="toToken"===e?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,a=parseFloat(r)*o;return"toToken"===e&&(a-=this.gasPriceInUSD||0),l.dy`<w3m-swap-input
      .value=${"toToken"===e?this.toTokenAmount:this.sourceTokenAmount}
      ?disabled=${this.loadingQuote&&"toToken"===e}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${e}
      .token=${t}
      .balance=${i?.quantity?.numeric}
      .price=${i?.price}
      .marketValue=${a}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(e,t){let i="sourceToken"===e?this.sourceToken:this.toToken,r=i?.address===n.bq.NATIVE_TOKEN_ADDRESS,o="0";if(!t){o="0",this.handleChangeAmount(e,o);return}if(!this.gasPriceInUSD){o=t,this.handleChangeAmount(e,o);return}let a=Q.C6.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.sourceTokenPriceInUSD),s=r?Q.C6.bigNumber(t).minus(a):Q.C6.bigNumber(t);this.handleChangeAmount(e,s.isGreaterThan(0)?s.toFixed(20):"0")}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?l.dy`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}handleChangeAmount(e,t){n.nY.clearError(),"sourceToken"===e?n.nY.setSourceTokenAmount(t):n.nY.setToTokenAmount(t),this.onDebouncedGetSwapCalldata()}templateActionButton(){let e=!this.toToken||!this.sourceToken,t=!this.sourceTokenAmount,i=this.loadingQuote||this.loadingPrices||this.loadingTransaction,r=i||e||t||this.inputError;return l.dy` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${e?"neutral":"main"}
        .loading=${i}
        .disabled=${r}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){n.nY.switchTokens()}onSwapPreview(){if(this.fetchError){n.nY.swapTokens();return}n.Xs.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:this.sourceToken?.symbol||"",swapToToken:this.toToken?.symbol||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:n.Ni.state.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),n.Pc.push("SwapPreview")}};eZ.styles=ez,eW([(0,c.SB)()],eZ.prototype,"interval",void 0),eW([(0,c.SB)()],eZ.prototype,"detailsOpen",void 0),eW([(0,c.SB)()],eZ.prototype,"caipNetworkId",void 0),eW([(0,c.SB)()],eZ.prototype,"initialized",void 0),eW([(0,c.SB)()],eZ.prototype,"loadingQuote",void 0),eW([(0,c.SB)()],eZ.prototype,"loadingPrices",void 0),eW([(0,c.SB)()],eZ.prototype,"loadingTransaction",void 0),eW([(0,c.SB)()],eZ.prototype,"sourceToken",void 0),eW([(0,c.SB)()],eZ.prototype,"sourceTokenAmount",void 0),eW([(0,c.SB)()],eZ.prototype,"sourceTokenPriceInUSD",void 0),eW([(0,c.SB)()],eZ.prototype,"toToken",void 0),eW([(0,c.SB)()],eZ.prototype,"toTokenAmount",void 0),eW([(0,c.SB)()],eZ.prototype,"toTokenPriceInUSD",void 0),eW([(0,c.SB)()],eZ.prototype,"inputError",void 0),eW([(0,c.SB)()],eZ.prototype,"gasPriceInUSD",void 0),eW([(0,c.SB)()],eZ.prototype,"fetchError",void 0),eZ=eW([(0,s.customElement)("w3m-swap-view")],eZ);var eH=l.iv`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`,eV=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let eF=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=n.nY.state.approvalTransaction,this.swapTransaction=n.nY.state.swapTransaction,this.sourceToken=n.nY.state.sourceToken,this.sourceTokenAmount=n.nY.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=n.nY.state.sourceTokenPriceInUSD,this.toToken=n.nY.state.toToken,this.toTokenAmount=n.nY.state.toTokenAmount??"",this.toTokenPriceInUSD=n.nY.state.toTokenPriceInUSD,this.caipNetwork=n.fB.state.caipNetwork,this.balanceSymbol=n.Ni.state.balanceSymbol,this.gasPriceInUSD=n.nY.state.gasPriceInUSD,this.inputError=n.nY.state.inputError,this.loadingQuote=n.nY.state.loadingQuote,this.loadingApprovalTransaction=n.nY.state.loadingApprovalTransaction,this.loadingBuildTransaction=n.nY.state.loadingBuildTransaction,this.loadingTransaction=n.nY.state.loadingTransaction,this.unsubscribe.push(...[n.Ni.subscribeKey("balanceSymbol",e=>{this.balanceSymbol!==e&&n.Pc.goBack()}),n.fB.subscribeKey("caipNetwork",e=>{this.caipNetwork!==e&&(this.caipNetwork=e)}),n.nY.subscribe(e=>{this.approvalTransaction=e.approvalTransaction,this.swapTransaction=e.swapTransaction,this.sourceToken=e.sourceToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toToken=e.toToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.sourceTokenAmount=e.sourceTokenAmount??"",this.toTokenAmount=e.toTokenAmount??"",this.inputError=e.inputError,e.inputError&&n.Pc.goBack(),this.loadingQuote=e.loadingQuote,this.loadingApprovalTransaction=e.loadingApprovalTransaction,this.loadingBuildTransaction=e.loadingBuildTransaction,this.loadingTransaction=e.loadingTransaction})])}firstUpdated(){n.nY.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(e=>e?.()),clearInterval(this.interval)}render(){return l.dy`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{n.nY.getApprovalLoadingState()||n.nY.getTransaction()},1e4)}templateSwap(){let e=`${s.UiHelperUtil.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`,t=`${s.UiHelperUtil.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`,i=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,r=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),o=s.UiHelperUtil.formatNumberToLocalString(i),a=s.UiHelperUtil.formatNumberToLocalString(r),n=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return l.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${o}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${this.sourceToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${a}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${this.toToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${n}
            ?disabled=${n}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?l.dy`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){n.Pc.goBack()}onSendTransaction(){this.approvalTransaction?n.nY.sendTransactionForApproval(this.approvalTransaction):n.nY.sendTransactionForSwap(this.swapTransaction)}};eF.styles=eH,eV([(0,c.SB)()],eF.prototype,"interval",void 0),eV([(0,c.SB)()],eF.prototype,"detailsOpen",void 0),eV([(0,c.SB)()],eF.prototype,"approvalTransaction",void 0),eV([(0,c.SB)()],eF.prototype,"swapTransaction",void 0),eV([(0,c.SB)()],eF.prototype,"sourceToken",void 0),eV([(0,c.SB)()],eF.prototype,"sourceTokenAmount",void 0),eV([(0,c.SB)()],eF.prototype,"sourceTokenPriceInUSD",void 0),eV([(0,c.SB)()],eF.prototype,"toToken",void 0),eV([(0,c.SB)()],eF.prototype,"toTokenAmount",void 0),eV([(0,c.SB)()],eF.prototype,"toTokenPriceInUSD",void 0),eV([(0,c.SB)()],eF.prototype,"caipNetwork",void 0),eV([(0,c.SB)()],eF.prototype,"balanceSymbol",void 0),eV([(0,c.SB)()],eF.prototype,"gasPriceInUSD",void 0),eV([(0,c.SB)()],eF.prototype,"inputError",void 0),eV([(0,c.SB)()],eF.prototype,"loadingQuote",void 0),eV([(0,c.SB)()],eF.prototype,"loadingApprovalTransaction",void 0),eV([(0,c.SB)()],eF.prototype,"loadingBuildTransaction",void 0),eV([(0,c.SB)()],eF.prototype,"loadingTransaction",void 0),eF=eV([(0,s.customElement)("w3m-swap-preview-view")],eF);var eY=l.iv`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`,eK=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let eq=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.targetToken=n.Pc.state.data?.target,this.sourceToken=n.nY.state.sourceToken,this.sourceTokenAmount=n.nY.state.sourceTokenAmount,this.toToken=n.nY.state.toToken,this.myTokensWithBalance=n.nY.state.myTokensWithBalance,this.popularTokens=n.nY.state.popularTokens,this.searchValue="",this.unsubscribe.push(...[n.nY.subscribe(e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.myTokensWithBalance=e.myTokensWithBalance})])}updated(){let e=this.renderRoot?.querySelector(".suggested-tokens-container");e?.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));let t=this.renderRoot?.querySelector(".tokens");t?.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback();let e=this.renderRoot?.querySelector(".suggested-tokens-container"),t=this.renderRoot?.querySelector(".tokens");e?.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),t?.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return l.dy`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(e){"sourceToken"===this.targetToken?n.nY.setSourceToken(e):(n.nY.setToToken(e),this.sourceToken&&this.sourceTokenAmount&&n.nY.swapTokens()),n.Pc.goBack()}templateSearchInput(){return l.dy`
      <wui-flex .padding=${["3xs","s","0","s"]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){let e=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],t=this.popularTokens?this.popularTokens:[],i=this.filterTokensWithText(e,this.searchValue),r=this.filterTokensWithText(t,this.searchValue);return l.dy`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${i?.length>0?l.dy`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${i.map(e=>{let t=e.symbol===this.sourceToken?.symbol||e.symbol===this.toToken?.symbol;return l.dy`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${e.symbol}"
                      name=${e.name}
                      ?disabled=${t}
                      symbol=${e.symbol}
                      price=${e?.price}
                      amount=${e?.quantity?.numeric}
                      imageSrc=${e.logoUri}
                      @click=${()=>{t||this.onSelectToken(e)}}
                    >
                    </wui-token-list-item>
                  `})}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${r?.length>0?r.map(e=>l.dy`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${e.symbol}"
                    name=${e.name}
                    symbol=${e.symbol}
                    imageSrc=${e.logoUri}
                    @click=${()=>this.onSelectToken(e)}
                  >
                  </wui-token-list-item>
                `):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){let e=n.nY.state.suggestedTokens?n.nY.state.suggestedTokens.slice(0,8):null;return e?l.dy`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${e.map(e=>l.dy`
            <wui-token-button
              text=${e.symbol}
              imageSrc=${e.logoUri}
              @click=${()=>this.onSelectToken(e)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(e){this.searchValue=e.detail}handleSuggestedTokensScroll(){let e=this.renderRoot?.querySelector(".suggested-tokens-container");e&&(e.style.setProperty("--suggested-tokens-scroll--left-opacity",s.MathUtil.interpolate([0,100],[0,1],e.scrollLeft).toString()),e.style.setProperty("--suggested-tokens-scroll--right-opacity",s.MathUtil.interpolate([0,100],[0,1],e.scrollWidth-e.scrollLeft-e.offsetWidth).toString()))}handleTokenListScroll(){let e=this.renderRoot?.querySelector(".tokens");e&&(e.style.setProperty("--tokens-scroll--top-opacity",s.MathUtil.interpolate([0,100],[0,1],e.scrollTop).toString()),e.style.setProperty("--tokens-scroll--bottom-opacity",s.MathUtil.interpolate([0,100],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString()))}filterTokensWithText(e,t){return e.filter(e=>`${e.symbol} ${e.name} ${e.address}`.toLowerCase().includes(t.toLowerCase()))}};eq.styles=eY,eK([(0,c.SB)()],eq.prototype,"interval",void 0),eK([(0,c.SB)()],eq.prototype,"targetToken",void 0),eK([(0,c.SB)()],eq.prototype,"sourceToken",void 0),eK([(0,c.SB)()],eq.prototype,"sourceTokenAmount",void 0),eK([(0,c.SB)()],eq.prototype,"toToken",void 0),eK([(0,c.SB)()],eq.prototype,"myTokensWithBalance",void 0),eK([(0,c.SB)()],eq.prototype,"popularTokens",void 0),eK([(0,c.SB)()],eq.prototype,"searchValue",void 0),eq=eK([(0,s.customElement)("w3m-swap-select-token-view")],eq);var eG=l.iv`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let eX=class extends l.oi{render(){return l.dy`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};eX.styles=eG,eX=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-transactions-view")],eX);let eQ=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],eJ=class extends l.oi{render(){return l.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eQ}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{n.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};eJ=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-what-is-a-network-view")],eJ);let e0=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],e1=class extends l.oi{render(){return l.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${e0}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){n.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),n.Pc.push("GetWallet")}};e1=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-what-is-a-wallet-view")],e1);let e2=class extends l.oi{render(){return l.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${n.Pc.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};e2=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-what-is-a-buy-view")],e2);var e3=l.iv`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`,e5=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let e4=class extends l.oi{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=R.$D.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=n.Pc.state.data?.email,this.authConnector=n.AA.getAuthConnector()}render(){if(!this.email)throw Error("w3m-email-otp-widget: No email provided");let e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return l.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","xl","0","xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?l.dy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:l.dy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?l.dy`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=R.$D.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=R.$D.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{!this.loading&&(this.otp=e.detail,this.authConnector&&6===this.otp.length&&(this.loading=!0,await this.onOtpSubmit?.(this.otp)))}catch(e){this.error=n.j1.parseError(e),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){this.error="",this.otp="";let e=n.AA.getAuthConnector();if(!e||!this.email)throw Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),n.KC.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){n.KC.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};e4.styles=e3,e5([(0,c.SB)()],e4.prototype,"loading",void 0),e5([(0,c.SB)()],e4.prototype,"timeoutTimeLeft",void 0),e5([(0,c.SB)()],e4.prototype,"error",void 0),e4=e5([(0,s.customElement)("w3m-email-otp-widget")],e4);var e6=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let e8=class extends e4{constructor(){super(),this.unsubscribe=[],this.smartAccountDeployed=n.Ni.state.smartAccountDeployed,this.onOtpSubmit=async e=>{try{if(this.authConnector){let t=n.fB.checkIfSmartAccountEnabled();await this.authConnector.provider.connectOtp({otp:e}),n.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await n.lZ.connectExternal(this.authConnector),n.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown"}}),n.Ni.state.allAccounts.length>1?n.Pc.push("SelectAddresses"):t&&!this.smartAccountDeployed?n.Pc.push("UpgradeToSmartAccount"):n.IN.close()}}catch(e){throw n.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),n.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))},this.unsubscribe.push(n.Ni.subscribeKey("smartAccountDeployed",e=>{this.smartAccountDeployed=e}))}};e6([(0,c.SB)()],e8.prototype,"smartAccountDeployed",void 0),e8=e6([(0,s.customElement)("w3m-email-verify-otp-view")],e8);var e9=l.iv`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`,e7=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let te=class extends l.oi{constructor(){super(),this.email=n.Pc.state.data?.email,this.authConnector=n.AA.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw Error("w3m-email-verify-device-view: No auth connector provided");return l.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),n.Xs.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),n.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),n.Pc.replace("EmailVerifyOtp",{email:this.email})}catch(e){n.Pc.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),n.KC.showSuccess("Code email resent")}}catch(e){n.KC.showError(e)}finally{this.loading=!1}}};te.styles=e9,e7([(0,c.SB)()],te.prototype,"loading",void 0),te=e7([(0,s.customElement)("w3m-email-verify-device-view")],te);var tt=l.iv`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`,ti=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let tr=class extends l.oi{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(...[n.IN.subscribeKey("open",e=>{e||(this.onHideIframe(),n.Pc.popTransactionStack())})])}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block",this.bodyObserver=new ResizeObserver(e=>{let t=e?.[0]?.contentBoxSize,i=t?.[0]?.inlineSize;this.iframe.style.height="400px",i&&i<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width="360px",this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top="calc(50% - 200px + 32px)",this.iframe.style.bottom="unset"),this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),l.dy`<div data-ready=${this.ready}></div>`}onShowIframe(){let e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards"})}async onHideIframe(){this.iframe.style.display="none",await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished}async syncTheme(){let e=n.AA.getAuthConnector();if(e){let t=n.u0.getSnapshot().themeMode,i=n.u0.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:i,w3mThemeVariables:(0,Q.tU)(i,t)})}}};tr.styles=tt,ti([(0,c.SB)()],tr.prototype,"ready",void 0),tr=ti([(0,s.customElement)("w3m-approve-transaction-view")],tr);let to=class extends l.oi{render(){return l.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${n.bq.SECURE_SITE_DASHBOARD}
          imageSrc=${n.bq.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};to=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-upgrade-wallet-view")],to);var ta=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let tn=class extends l.oi{constructor(){super(...arguments),this.authConnector=n.AA.getAuthConnector(),this.loading=!1,this.setPreferSmartAccount=async()=>{if(this.authConnector)try{this.loading=!0,await n.lZ.setPreferredAccountType(R.y_.ACCOUNT_TYPES.SMART_ACCOUNT),this.loading=!1,n._4.navigateAfterPreferredAccountTypeSelect()}catch(e){n.KC.showError("Error upgrading to smart account")}}}render(){return l.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{n.j1.openHref(Q.UE.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l.dy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l.dy`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button
        variant="accent"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){n.Pc.push("Account")}};ta([(0,c.SB)()],tn.prototype,"authConnector",void 0),ta([(0,c.SB)()],tn.prototype,"loading",void 0),tn=ta([(0,s.customElement)("w3m-upgrade-to-smart-account-view")],tn);var ts=l.iv`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`,tl=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let tc=class extends l.oi{constructor(){super(...arguments),this.formRef=ew(),this.initialEmail=n.Pc.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return l.dy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${ev(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="neutral" fullWidth @click=${n.Pc.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="main"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=n.AA.getAuthConnector();if(!t)throw Error("w3m-update-email-wallet: Auth connector not found");let i=await t.provider.updateEmail({email:this.email});n.Xs.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===i.action?n.Pc.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email}):n.Pc.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(e){n.KC.showError(e),this.loading=!1}}};tc.styles=ts,tl([(0,c.SB)()],tc.prototype,"email",void 0),tl([(0,c.SB)()],tc.prototype,"loading",void 0),tc=tl([(0,s.customElement)("w3m-update-email-wallet-view")],tc);let tu=class extends e4{constructor(){super(),this.email=n.Pc.state.data?.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),n.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),n.Pc.replace("UpdateEmailSecondaryOtp",n.Pc.state.data))}catch(e){throw n.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{n.Pc.replace("UpdateEmailWallet",n.Pc.state.data)}}};tu=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-update-email-primary-otp-view")],tu);let td=class extends e4{constructor(){super(),this.email=n.Pc.state.data?.newEmail,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),n.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),n.Pc.reset("Account"))}catch(e){throw n.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{n.Pc.replace("UpdateEmailWallet",n.Pc.state.data)}}};td=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-update-email-secondary-otp-view")],td);var tp=l.iv`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,th=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let tg=class extends l.oi{constructor(){super(...arguments),this.swapUnsupportedChain=n.Pc.state.data?.swapUnsupportedChain,this.disconecting=!1}render(){return l.dy`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?l.dy`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:l.dy`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){let e=n.fB.getRequestedCaipNetworks(),t=n.fB.state.approvedCaipNetworkIds,i=n.j1.sortRequestedNetworks(t,e),r=this.swapUnsupportedChain?i.filter(e=>n.bq.SWAP_SUPPORTED_NETWORKS.includes(e.id)):i;return r.map(e=>l.dy`
        <wui-list-network
          imageSrc=${d(n.fz.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await n.lZ.disconnect(),n.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),n.IN.close()}catch{n.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),n.KC.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){let t=n.Ni.state.isConnected,i=n.fB.state.approvedCaipNetworkIds,r=n.fB.state.supportsAllNetworks,o=n.fB.state.caipNetwork,a=n.Pc.state.data;t&&o?.id!==e.id?i?.includes(e.id)?(await n.fB.switchActiveNetwork(e),await eT.onNetworkChange()):r&&n.Pc.push("SwitchNetwork",{...a,network:e}):t||(n.fB.setCaipNetwork(e),n.Pc.push("Connect"))}};tg.styles=tp,th([(0,c.SB)()],tg.prototype,"disconecting",void 0),tg=th([(0,s.customElement)("w3m-unsupported-chain-view")],tg);var tw=l.iv`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`,tf=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let tm=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.address=n.Ni.state.address,this.profileName=n.Ni.state.profileName,this.network=n.fB.state.caipNetwork,this.preferredAccountType=n.Ni.state.preferredAccountType,this.unsubscribe.push(...[n.Ni.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):n.KC.showError("Account not found")})],n.fB.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-wallet-receive-view: No account provided");let e=n.fz.getNetworkImage(this.network);return l.dy` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${s.UiHelperUtil.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${n.u0.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=n.fB.getRequestedCaipNetworks(),t=n.fB.checkIfSmartAccountEnabled(),i=n.fB.state.caipNetwork;if(this.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return i?l.dy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[n.fz.getNetworkImage(i)??""]}
      ></wui-compatible-network>`:null;let r=e?.filter(e=>e?.imageId)?.slice(0,5),o=r.map(n.fz.getNetworkImage).filter(Boolean);return l.dy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${o}
    ></wui-compatible-network>`}onReceiveClick(){n.Pc.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(n.j1.copyToClopboard(this.address),n.KC.showSuccess("Address copied"))}catch{n.KC.showError("Failed to copy")}}};tm.styles=tw,tf([(0,c.SB)()],tm.prototype,"address",void 0),tf([(0,c.SB)()],tm.prototype,"profileName",void 0),tf([(0,c.SB)()],tm.prototype,"network",void 0),tf([(0,c.SB)()],tm.prototype,"preferredAccountType",void 0),tm=tf([(0,s.customElement)("w3m-wallet-receive-view")],tm);var tv=l.iv`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,tb=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ty=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.preferredAccountType=n.Ni.state.preferredAccountType,this.unsubscribe.push(n.Ni.subscribeKey("preferredAccountType",e=>{this.preferredAccountType=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l.dy` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=n.fB.getRequestedCaipNetworks(),t=n.fB.state.approvedCaipNetworkIds,i=n.fB.state.caipNetwork,r=n.fB.checkIfSmartAccountEnabled(),o=n.j1.sortRequestedNetworks(t,e);if(r&&this.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT){if(!i)return null;o=[i]}return o.map(e=>l.dy`
        <wui-list-network
          imageSrc=${d(n.fz.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};ty.styles=tv,tb([(0,c.SB)()],ty.prototype,"preferredAccountType",void 0),ty=tb([(0,s.customElement)("w3m-wallet-compatible-networks-view")],ty);var tx=l.iv`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`,tC=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let tk=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.token=n.Si.state.token,this.sendTokenAmount=n.Si.state.sendTokenAmount,this.receiverAddress=n.Si.state.receiverAddress,this.receiverProfileName=n.Si.state.receiverProfileName,this.loading=n.Si.state.loading,this.gasPriceInUSD=n.Si.state.gasPriceInUSD,this.message="Preview Send",this.fetchNetworkPrice(),this.unsubscribe.push(...[n.Si.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading})])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),l.dy` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}async fetchNetworkPrice(){await n.nY.getNetworkTokenPrice();let e=await n.nY.getInitialGasPrice();e?.gasPrice&&e?.gasPriceInUSD&&(n.Si.setGasPrice(e.gasPrice),n.Si.setGasPriceInUsd(e.gasPriceInUSD))}onButtonClick(){n.Pc.push("WalletSendPreview")}getMessage(){if(this.message="Preview Send",this.receiverAddress&&!n.j1.isAddress(this.receiverAddress)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.sendTokenAmount&&this.token?.price){let e=this.sendTokenAmount*this.token.price;e||(this.message="Incorrect Value")}this.token||(this.message="Select Token")}};tk.styles=tx,tC([(0,c.SB)()],tk.prototype,"token",void 0),tC([(0,c.SB)()],tk.prototype,"sendTokenAmount",void 0),tC([(0,c.SB)()],tk.prototype,"receiverAddress",void 0),tC([(0,c.SB)()],tk.prototype,"receiverProfileName",void 0),tC([(0,c.SB)()],tk.prototype,"loading",void 0),tC([(0,c.SB)()],tk.prototype,"gasPriceInUSD",void 0),tC([(0,c.SB)()],tk.prototype,"message",void 0),tk=tC([(0,s.customElement)("w3m-wallet-send-view")],tk);var tT=l.iv`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`,tS=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let tA=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.tokenBalance=n.Ni.state.tokenBalance,this.search="",this.onDebouncedSearch=n.j1.debounce(e=>{this.search=e}),this.unsubscribe.push(...[n.Ni.subscribe(e=>{this.tokenBalance=e.tokenBalance})])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l.dy`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return l.dy`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.tokens=this.tokenBalance?.filter(e=>e.chainId===n.fB.state.caipNetwork?.id),this.search?this.filteredTokens=this.tokenBalance?.filter(e=>e.name.toLowerCase().includes(this.search.toLowerCase())):this.filteredTokens=this.tokens,l.dy`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(e=>l.dy`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`):l.dy`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){n.Pc.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){n.Si.setToken(e),n.Si.setTokenAmount(void 0),n.Pc.goBack()}};tA.styles=tT,tS([(0,c.SB)()],tA.prototype,"tokenBalance",void 0),tS([(0,c.SB)()],tA.prototype,"tokens",void 0),tS([(0,c.SB)()],tA.prototype,"filteredTokens",void 0),tS([(0,c.SB)()],tA.prototype,"search",void 0),tA=tS([(0,s.customElement)("w3m-wallet-send-select-token-view")],tA);var t_=l.iv`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`,tE=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let t$=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.token=n.Si.state.token,this.sendTokenAmount=n.Si.state.sendTokenAmount,this.receiverAddress=n.Si.state.receiverAddress,this.receiverProfileName=n.Si.state.receiverProfileName,this.receiverProfileImageUrl=n.Si.state.receiverProfileImageUrl,this.gasPriceInUSD=n.Si.state.gasPriceInUSD,this.caipNetwork=n.fB.state.caipNetwork,this.unsubscribe.push(...[n.Si.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl}),n.fB.subscribeKey("caipNetwork",e=>this.caipNetwork=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l.dy` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?s.UiHelperUtil.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?s.UiHelperUtil.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):s.UiHelperUtil.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){let e=this.token.price,t=e*this.sendTokenAmount;return l.dy`<wui-text variant="paragraph-400" color="fg-100"
        >$${t.toFixed(2)}</wui-text
      >`}return null}onSendClick(){n.Si.sendToken()}onCancelClick(){n.Pc.goBack()}};t$.styles=t_,tE([(0,c.SB)()],t$.prototype,"token",void 0),tE([(0,c.SB)()],t$.prototype,"sendTokenAmount",void 0),tE([(0,c.SB)()],t$.prototype,"receiverAddress",void 0),tE([(0,c.SB)()],t$.prototype,"receiverProfileName",void 0),tE([(0,c.SB)()],t$.prototype,"receiverProfileImageUrl",void 0),tE([(0,c.SB)()],t$.prototype,"gasPriceInUSD",void 0),tE([(0,c.SB)()],t$.prototype,"caipNetwork",void 0),t$=tE([(0,s.customElement)("w3m-wallet-send-preview-view")],t$);var tR=l.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;let tP=class extends l.oi{render(){return l.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-wallet-login-list></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};tP.styles=tR,tP=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-connect-wallets-view")],tP);var tN=l.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;let tI=class extends l.oi{render(){return l.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-social-login-list></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};tI.styles=tN,tI=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-connect-socials-view")],tI);var tO=l.iv`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`,tD=i(34155);let tj={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],SECURE_SITE_ORIGIN:tD.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN||"https://secure.walletconnect.org"};var tU=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let tB=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.socialProvider=n.Ni.state.socialProvider,this.socialWindow=n.Ni.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.authConnector=n.AA.getAuthConnector(),this.handleSocialConnection=async e=>{if(e.data?.resultUri){if(e.origin===tj.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),n.Ni.setSocialWindow(void 0,n.RY.state.activeChain)),this.connecting=!0,this.updateMessage();let t=e.data.resultUri;await this.authConnector.provider.connectSocial(t),this.socialProvider&&(n.MO.setConnectedSocialProvider(this.socialProvider),await n.lZ.connectExternal(this.authConnector),n.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(e){this.error=!0,this.updateMessage(),this.socialProvider&&n.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else n.Pc.goBack(),n.KC.showError("Untrusted Origin"),this.socialProvider&&n.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}},this.unsubscribe.push(...[n.Ni.subscribe(e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow),e.address&&n.IN.state.open&&n.IN.close()})]),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener("message",this.handleSocialConnection,!1)}render(){return l.dy`
      <wui-flex
        data-error=${d(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${d(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){let e=n.u0.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return l.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}connectSocial(){let e=setInterval(()=>{this.socialWindow?.closed&&(this.connecting||"ConnectingSocial"!==n.Pc.state.view||n.Pc.goBack(),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};tB.styles=tO,tU([(0,c.SB)()],tB.prototype,"socialProvider",void 0),tU([(0,c.SB)()],tB.prototype,"socialWindow",void 0),tU([(0,c.SB)()],tB.prototype,"error",void 0),tU([(0,c.SB)()],tB.prototype,"connecting",void 0),tU([(0,c.SB)()],tB.prototype,"message",void 0),tB=tU([(0,s.customElement)("w3m-connecting-social-view")],tB);var tM=l.iv`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`,tL=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let tz=class extends l.oi{constructor(){super(),this.usubscribe=[],this.address=n.Ni.state.address,this.profileImage=n.Ni.state.profileImage,this.profileName=n.Ni.state.profileName,this.accounts=n.Ni.state.allAccounts,this.usubscribe.push(n.Ni.subscribeKey("address",e=>{e?this.address=e:n.IN.close()})),this.usubscribe.push(n.Ni.subscribeKey("profileImage",e=>{this.profileImage=e})),this.usubscribe.push(n.Ni.subscribeKey("profileName",e=>{this.profileName=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-profile-view: No account provided");let e=this.profileName?.split(".")[0];return l.dy`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${d(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${e?s.UiHelperUtil.getTruncateString({string:e,charsStart:20,charsEnd:0,truncate:"end"}):s.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>n.Pc.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return l.dy`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map(e=>this.accountTemplate(e))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(e){n.Ni.setShouldUpdateToAddress(e.address);let t=n.AA.getAuthConnector();t&&(await t.provider.setPreferredAccount(e.type),await t.provider.connect())}accountTemplate(e){return l.dy`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${e.address===this.address?"":l.dy`<wui-button
            slot="action"
            textVariant="small-600"
            size="sm"
            variant="accent"
            @click=${()=>this.onSwitchAccount(e)}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.profileName?(n.j1.copyToClopboard(this.profileName),n.KC.showSuccess("Name copied")):this.address&&(n.j1.copyToClopboard(this.address),n.KC.showSuccess("Address copied"))}catch{n.KC.showError("Failed to copy")}}};tz.styles=tM,tL([(0,c.SB)()],tz.prototype,"address",void 0),tL([(0,c.SB)()],tz.prototype,"profileImage",void 0),tL([(0,c.SB)()],tz.prototype,"profileName",void 0),tL([(0,c.SB)()],tz.prototype,"accounts",void 0),tz=tL([(0,s.customElement)("w3m-profile-view")],tz);var tW=l.iv`
  input[type='checkbox'] {
    all: revert;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    accent-color: var(--wui-color-accent-100);
  }
`,tZ=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let tH=class extends l.oi{constructor(){super(),this.metadata=n.hD.state.metadata,this.allAccounts=n.Ni.state.allAccounts,this.selectedAccounts=n.Ni.state.allAccounts,this.selectAll=!0,this.approved=!1,this.isApproving=!1,this.getAddressTemplate=e=>{let t=this.selectedAccounts.some(t=>t.address===e.address);return l.dy`<wui-list-account accountAddress="${e.address}" accountType="${e.type}">
      <input
        id="${e.address}"
        slot="action"
        type="checkbox"
        .checked="${t}"
        @change="${this.handleClick(e)}"
      />
    </wui-list-account>`},this.onSelectAll=e=>{let t=e.target.checked;this.selectAll=this.selectedAccounts.length===this.allAccounts.length,this.allAccounts.forEach(e=>{this.onSelect(e,t)})},this.onSelect=(e,t)=>{t?this.selectedAccounts.push(e):this.selectedAccounts=this.selectedAccounts.filter(t=>t.address!==e.address),this.selectedAccounts.length>0&&(this.selectAll=this.selectedAccounts.length===this.allAccounts.length)},n.Ni.subscribeKey("allAccounts",e=>{this.allAccounts=e})}render(){return l.dy`
    <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
      <wui-banner-img imageSrc="${d(this.metadata?.icons[0])}" text="${d(this.metadata?.url)}" size="sm"></wui-banner>
    </wui-flex>
    <wui-flex .padding=${["0","xl","0","xl"]} flexDirection="row" justifyContent="space-between">
        <wui-text variant="paragraph-400" color="fg-200">Select all</wui-text>
        <input type="checkbox" .checked=${this.selectAll}  @click=${this.onSelectAll.bind(this)} />
    </wui-flex>
      <wui-flex flexDirection="column" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map(e=>this.getAddressTemplate(e))}
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="neutral"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="main"
          .disabled=${0===this.selectedAccounts.length}
          @click=${this.onContinue.bind(this)}
          ?loading=${this.isApproving}
        >
          ${this.isApproving?"Signing...":"Continue"}
        </wui-button>
      </wui-flex>
    `}handleClick(e){return t=>{let i=t.target;this.onSelect?.({...e},i?.checked)}}onContinue(){this.selectedAccounts.length>0?(this.isApproving=!0,n.Ni.setAllAccounts(this.selectedAccounts),n.Ni.setShouldUpdateToAddress(this.selectedAccounts[0]?.address??""),this.approved=!0,this.isApproving=!1,n.IN.close()):this.onCancel()}async onCancel(){let{isConnected:e}=n.Ni.state;e?(await n.lZ.disconnect(),n.IN.close()):n.Pc.push("Connect")}disconnectedCallback(){super.disconnectedCallback(),this.approved||this.onCancel()}};tH.styles=tW,tZ([(0,c.SB)()],tH.prototype,"allAccounts",void 0),tZ([(0,c.SB)()],tH.prototype,"selectedAccounts",void 0),tZ([(0,c.SB)()],tH.prototype,"selectAll",void 0),tZ([(0,c.SB)()],tH.prototype,"approved",void 0),tZ([(0,c.SB)()],tH.prototype,"isApproving",void 0),tH=tZ([(0,s.customElement)("w3m-select-addresses-view")],tH);var tV=l.iv`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`,tF=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let tY=class extends l.oi{constructor(){super(),this.metadata=n.hD.state.metadata,this.allAccounts=n.Ni.state.allAccounts||[],this.balances={},this.labels=n.Ni.state.addressLabels,this.currentAddress=n.Ni.state.address||"",this.connectedConnector=n.MO.getConnectedConnector(),this.shouldShowIcon="AUTH"===this.connectedConnector,this.caipNetwork=n.fB.state.caipNetwork,n.Ni.subscribeKey("allAccounts",e=>{this.allAccounts=e})}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach(e=>{n.Lr.getBalance(e.address,this.caipNetwork?.id).then(t=>{let i=this.balances[e.address]||0;t.balances.length>0&&(i=t.balances.reduce((e,t)=>e+(t?.value||0),0)),this.balances[e.address]=i,this.requestUpdate()})})}getAddressIcon(e){return"smartAccount"===e?"lightbulb":"mail"}render(){return l.dy`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${d(this.metadata?.icons[0])}
          text=${d(this.metadata?.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map(e=>this.getAddressTemplate(e))}
      </wui-flex>
    `}getAddressTemplate(e){let t=this.labels?.get(e.address);return l.dy`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${this.shouldShowIcon?l.dy`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`:l.dy`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${t||s.UiHelperUtil.getTruncateString({string:e.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${"number"==typeof this.balances[e.address]?`$${this.balances[e.address]?.toFixed(2)}`:l.dy`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${e.address?.toLowerCase()===this.currentAddress?.toLowerCase()?"":l.dy`
                <wui-button
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(e){n.Ni.setShouldUpdateToAddress(e),n.IN.close()}};tY.styles=tV,tF([(0,c.SB)()],tY.prototype,"allAccounts",void 0),tF([(0,c.SB)()],tY.prototype,"balances",void 0),tY=tF([(0,s.customElement)("w3m-switch-address-view")],tY);var tK=l.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`,tq=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let tG=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=n.Ni.state.socialProvider,this.uri=n.Ni.state.farcasterUrl,this.ready=!1,this.loading=!1,this.authConnector=n.AA.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(...[n.Ni.subscribeKey("farcasterUrl",e=>{e&&(this.uri=e,this.connectFarcaster())}),n.Ni.subscribeKey("socialProvider",e=>{e&&(this.socialProvider=e)})]),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l.dy`${this.platformTemplate()}`}platformTemplate(){return n.j1.isMobile()?l.dy`${this.mobileTemplate()}`:l.dy`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?l.dy`${this.loadingTemplate()}`:l.dy`${this.qrTemplate()}`}qrTemplate(){return l.dy` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","xl","xl","xl"]}
      gap="xl"
    >
      <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="paragraph-500" color="fg-100">
        Scan this QR Code with your phone
      </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return l.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return l.dy` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl","xl","xl","xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          backgroundColor="error-100"
          background="opaque"
          iconColor="error-100"
          icon="close"
          size="sm"
          border
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){let e=n.u0.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return l.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await this.authConnector?.provider.connectFarcaster(),this.socialProvider&&n.MO.setConnectedSocialProvider(this.socialProvider),this.loading=!0,await n.lZ.connectExternal(this.authConnector),this.loading=!1,n.IN.close()}catch(e){n.Pc.goBack(),n.KC.showError(e)}}mobileLinkTemplate(){return l.dy`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&n.j1.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},0))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40;return l.dy` <wui-qr-code
      size=${e}
      theme=${n.u0.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return l.dy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(n.j1.copyToClopboard(this.uri),n.KC.showSuccess("Link copied"))}catch{n.KC.showError("Failed to copy")}}};tG.styles=tK,tq([(0,c.SB)()],tG.prototype,"socialProvider",void 0),tq([(0,c.SB)()],tG.prototype,"uri",void 0),tq([(0,c.SB)()],tG.prototype,"ready",void 0),tq([(0,c.SB)()],tG.prototype,"loading",void 0),tG=tq([(0,s.customElement)("w3m-connecting-farcaster-view")],tG);var tX=l.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function tQ(e){let{connectors:t}=n.AA.state,i=t.filter(e=>"ANNOUNCED"===e.type).reduce((e,t)=>(t.info?.rdns&&(e[t.info.rdns]=!0),e),{}),r=e.map(e=>({...e,installed:!!e.rdns&&!!i[e.rdns??""]})),o=r.sort((e,t)=>Number(t.installed)-Number(e.installed));return o}var tJ=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let t0="local-paginator",t1=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!n.QT.state.wallets.length,this.wallets=n.QT.state.wallets,this.recommended=n.QT.state.recommended,this.featured=n.QT.state.featured,this.unsubscribe.push(...[n.QT.subscribeKey("wallets",e=>this.wallets=e),n.QT.subscribeKey("recommended",e=>this.recommended=e),n.QT.subscribeKey("featured",e=>this.featured=e)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return l.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await n.QT.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>l.dy`
        <wui-card-select-loader type="wallet" id=${d(t)}></wui-card-select-loader>
      `)}walletsTemplate(){let e=[...this.featured,...this.recommended,...this.wallets],t=tQ(e);return t.map(e=>l.dy`
        <wui-card-select
          imageSrc=${d(n.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
          .installed=${e.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:i,count:r}=n.QT.state,o=window.innerWidth<352?3:4,a=e.length+t.length,s=Math.ceil(a/o)*o-a+o;return(s-=e.length?i.length%o:0,0===r&&i.length>0)?null:0===r||[...i,...e,...t].length<r?this.shimmerTemplate(s,t0):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${t0}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.initial){let{page:e,count:t,wallets:i}=n.QT.state;i.length<t&&n.QT.fetchWallets({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){let t=n.AA.getConnector(e.id,e.rdns);t?n.Pc.push("ConnectingExternal",{connector:t}):n.Pc.push("ConnectingWalletConnect",{wallet:e})}};t1.styles=tX,tJ([(0,c.SB)()],t1.prototype,"initial",void 0),tJ([(0,c.SB)()],t1.prototype,"wallets",void 0),tJ([(0,c.SB)()],t1.prototype,"recommended",void 0),tJ([(0,c.SB)()],t1.prototype,"featured",void 0),t1=tJ([(0,s.customElement)("w3m-all-wallets-list")],t1);var t2=l.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,t3=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let t5=class extends l.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?l.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()!==this.prevQuery.trim()&&(this.prevQuery=this.query,this.loading=!0,await n.QT.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:e}=n.QT.state,t=tQ(e);return e.length?l.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(e=>l.dy`
            <wui-card-select
              imageSrc=${d(n.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
              .installed=${e.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:l.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){let t=n.AA.getConnector(e.id,e.rdns);t?n.Pc.push("ConnectingExternal",{connector:t}):n.Pc.push("ConnectingWalletConnect",{wallet:e})}};t5.styles=t2,t3([(0,c.SB)()],t5.prototype,"loading",void 0),t3([(0,c.Cb)()],t5.prototype,"query",void 0),t5=t3([(0,s.customElement)("w3m-all-wallets-search")],t5);var t4=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let t6=class extends l.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(n.lZ.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return l.dy`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};t4([(0,c.Cb)({type:Array})],t6.prototype,"platforms",void 0),t4([(0,c.Cb)()],t6.prototype,"onSelectPlatfrom",void 0),t4([(0,c.SB)()],t6.prototype,"buffering",void 0),t6=t4([(0,s.customElement)("w3m-connecting-header")],t6);let t8=class extends Y{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),n.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=n.AA.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns),i=e.find(e=>"INJECTED"===e.type);t?await n.lZ.connectExternal(t):i&&await n.lZ.connectExternal(i),n.IN.close(),n.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){n.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};t8=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-connecting-wc-browser")],t8);let t9=class extends Y{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),n.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:i,href:r}=n.j1.formatNativeUrl(e,this.uri);n.lZ.setWcLinking({name:t,href:r}),n.lZ.setRecentWallet(this.wallet),n.j1.openHref(i,"_blank")}catch{this.error=!0}}};t9=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-connecting-wc-desktop")],t9);let t7=class extends Y{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),n.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:i,href:r}=n.j1.formatNativeUrl(e,this.uri);n.lZ.setWcLinking({name:t,href:r}),n.lZ.setRecentWallet(this.wallet),n.j1.openHref(i,"_self")}catch{this.error=!0}}onBuffering(){let e=n.j1.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(n.lZ.setBuffering(!0),setTimeout(()=>{n.lZ.setBuffering(!1)},5e3))}};t7=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-connecting-wc-mobile")],t7);var ie=l.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let it=class extends Y{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),n.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},0))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return n.lZ.setWcLinking(void 0),n.lZ.setRecentWallet(this.wallet),l.dy` <wui-qr-code
      size=${e}
      theme=${n.u0.state.themeMode}
      uri=${this.uri}
      imageSrc=${d(n.fz.getWalletImage(this.wallet))}
      alt=${d(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return l.dy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};it.styles=ie,it=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-connecting-wc-qrcode")],it);let ii=class extends l.oi{constructor(){if(super(),this.wallet=n.Pc.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");n.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return l.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${d(n.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};ii=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-connecting-wc-unsupported")],ii);let ir=class extends Y{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",n.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:i,href:r}=n.j1.formatUniversalUrl(e,this.uri);n.lZ.setWcLinking({name:t,href:r}),n.lZ.setRecentWallet(this.wallet),n.j1.openHref(i,"_blank")}catch{this.error=!0}}};ir=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-connecting-wc-web")],ir);var io=l.iv`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`,ia=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let is=n.bq.CONVERT_SLIPPAGE_TOLERANCE,il=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.networkName=n.fB.state.caipNetwork?.name,this.detailsOpen=!1,this.sourceToken=n.nY.state.sourceToken,this.toToken=n.nY.state.toToken,this.toTokenAmount=n.nY.state.toTokenAmount,this.sourceTokenPriceInUSD=n.nY.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=n.nY.state.toTokenPriceInUSD,this.gasPriceInUSD=n.nY.state.gasPriceInUSD,this.priceImpact=n.nY.state.priceImpact,this.maxSlippage=n.nY.state.maxSlippage,this.networkTokenSymbol=n.nY.state.networkTokenSymbol,this.inputError=n.nY.state.inputError,this.unsubscribe.push(...[n.nY.subscribe(e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.gasPriceInUSD=e.gasPriceInUSD,this.priceImpact=e.priceImpact,this.maxSlippage=e.maxSlippage,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError})])}render(){let e=this.toTokenAmount&&this.maxSlippage?Q.C6.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;let t=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return l.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${s.UiHelperUtil.formatNumberToLocalString(t,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${s.UiHelperUtil.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?l.dy`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Network cost
                        </wui-text>
                        <w3m-tooltip-trigger
                          text=${`Network cost is paid in ${this.networkTokenSymbol} on the ${this.networkName} network in order to execute transaction.`}
                        >
                          <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                        </w3m-tooltip-trigger>
                      </wui-flex>
                      <wui-text variant="small-400" color="fg-100">
                        $${s.UiHelperUtil.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?l.dy` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${s.UiHelperUtil.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?l.dy`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${e?`Transaction will be reversed if you receive less than ${s.UiHelperUtil.formatNumberToLocalString(e,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${s.UiHelperUtil.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${is}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};il.styles=[io],ia([(0,c.SB)()],il.prototype,"networkName",void 0),ia([(0,c.Cb)()],il.prototype,"detailsOpen",void 0),ia([(0,c.SB)()],il.prototype,"sourceToken",void 0),ia([(0,c.SB)()],il.prototype,"toToken",void 0),ia([(0,c.SB)()],il.prototype,"toTokenAmount",void 0),ia([(0,c.SB)()],il.prototype,"sourceTokenPriceInUSD",void 0),ia([(0,c.SB)()],il.prototype,"toTokenPriceInUSD",void 0),ia([(0,c.SB)()],il.prototype,"gasPriceInUSD",void 0),ia([(0,c.SB)()],il.prototype,"priceImpact",void 0),ia([(0,c.SB)()],il.prototype,"maxSlippage",void 0),ia([(0,c.SB)()],il.prototype,"networkTokenSymbol",void 0),ia([(0,c.SB)()],il.prototype,"inputError",void 0),il=ia([(0,s.customElement)("w3m-swap-details")],il);var ic=l.iv`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`,iu=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let id=class extends l.oi{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){let e=this.marketValue||"0",t=Q.C6.bigNumber(e).isGreaterThan("0");return l.dy`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${t?`$${s.UiHelperUtil.formatNumberToLocalString(this.marketValue,3)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){return Q.kg.numericInputKeyDown(e,this.value,e=>this.onSetAmount?.(this.target,e))}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;let t=e.target.value.replace(/[^0-9.]/gu,"");","===t||"."===t?this.onSetAmount(this.target,"0."):t.endsWith(",")?this.onSetAmount(this.target,t.replace(",",".")):this.onSetAmount(this.target,t)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){return this.token?l.dy`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:l.dy` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){let e=Q.C6.multiply(this.balance,this.price),t=!!e&&e?.isGreaterThan(5e-5);return l.dy`
      ${t?l.dy`<wui-text variant="small-400" color="fg-200">
            ${s.UiHelperUtil.formatNumberToLocalString(this.balance,3)}
          </wui-text>`:null}
      ${"sourceToken"===this.target?this.tokenActionButtonTemplate(t):null}
    `}tokenActionButtonTemplate(e){return e?l.dy` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:l.dy` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){n.Xs.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),n.Pc.push("SwapSelectToken",{target:this.target})}onBuyToken(){n.Pc.push("OnRampProviders")}};id.styles=[ic],iu([(0,c.Cb)()],id.prototype,"focused",void 0),iu([(0,c.Cb)()],id.prototype,"balance",void 0),iu([(0,c.Cb)()],id.prototype,"value",void 0),iu([(0,c.Cb)()],id.prototype,"price",void 0),iu([(0,c.Cb)()],id.prototype,"marketValue",void 0),iu([(0,c.Cb)()],id.prototype,"disabled",void 0),iu([(0,c.Cb)()],id.prototype,"target",void 0),iu([(0,c.Cb)()],id.prototype,"token",void 0),iu([(0,c.Cb)()],id.prototype,"onSetAmount",void 0),iu([(0,c.Cb)()],id.prototype,"onSetMaxValue",void 0),id=iu([(0,s.customElement)("w3m-swap-input")],id);var ip=l.iv`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`,ih=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ig=class extends l.oi{constructor(){super(...arguments),this.target="sourceToken"}render(){return l.dy`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return l.dy`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};ig.styles=[ip],ih([(0,c.Cb)()],ig.prototype,"target",void 0),ig=ih([(0,s.customElement)("w3m-swap-input-skeleton")],ig);var iw=l.iv`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,im=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let iv=["Swap","SwapSelectToken","SwapPreview"];function ib(){let e=n.Pc.state.data?.connector?.name,t=n.Pc.state.data?.wallet?.name,i=n.Pc.state.data?.network?.name,r=t??e,o=n.AA.getConnectors(),a=1===o.length&&o[0]?.id==="w3m-email";return{Connect:`Connect ${a?"Email":""} Wallet`,ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:r?`Get ${r}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Profile:void 0,SelectAddresses:"Select accounts",SwitchNetwork:i??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:n.Ni.state.socialProvider?n.Ni.state.socialProvider:"Connect Social",ConnectingFarcaster:"Farcaster"}}let iy=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.heading=ib()[n.Pc.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(n.Pc.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),n.lZ.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return l.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
    `}onWalletHelp(){n.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),n.Pc.push("WhatIsAWallet")}async onClose(){if(n.hD.state.isSiweEnabled){let{SIWEController:e}=await Promise.all([i.e(9585),i.e(6822)]).then(i.bind(i,38042));"success"!==e.state.status&&await n.lZ.disconnect()}n.IN.close()}titleTemplate(){let e=iv.includes(n.Pc.state.view);return l.dy`
      <wui-flex class="w3m-header-title" alignItems="center" gap="xs">
        <wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>
        ${e?l.dy`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}dynamicButtonTemplate(){let{view:e}=n.Pc.state;return this.showBack&&!("ApproveTransaction"===e||"UpgradeToSmartAccount"===e||"ConnectingSiwe"===e)?l.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:l.dy`<wui-icon-link
      data-hidden=${"Connect"!==e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){let t=this.shadowRoot?.querySelector("wui-flex.w3m-header-title");if(t){let i=ib()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=i,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:e}=n.Pc.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){n.Pc.goBack()}};iy.styles=[iw],im([(0,c.SB)()],iy.prototype,"heading",void 0),im([(0,c.SB)()],iy.prototype,"buffering",void 0),im([(0,c.SB)()],iy.prototype,"showBack",void 0),iy=im([(0,s.customElement)("w3m-header")],iy);var ix=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let iC=class extends l.oi{constructor(){super(...arguments),this.data=[]}render(){return l.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>l.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>l.dy`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};ix([(0,c.Cb)({type:Array})],iC.prototype,"data",void 0),iC=ix([(0,s.customElement)("w3m-help-widget")],iC);var ik=l.iv`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`,iT=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let iS=class extends l.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return l.dy`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?l.dy`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:l.dy`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await n.QT._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return l.dy`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){let e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return l.dy`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return l.dy`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};iS.styles=[ik],iT([(0,c.Cb)({type:Boolean})],iS.prototype,"disabled",void 0),iT([(0,c.Cb)()],iS.prototype,"color",void 0),iT([(0,c.Cb)()],iS.prototype,"label",void 0),iT([(0,c.Cb)()],iS.prototype,"purchaseValue",void 0),iT([(0,c.Cb)()],iS.prototype,"purchaseCurrency",void 0),iT([(0,c.Cb)()],iS.prototype,"date",void 0),iT([(0,c.Cb)({type:Boolean})],iS.prototype,"completed",void 0),iT([(0,c.Cb)({type:Boolean})],iS.prototype,"inProgress",void 0),iT([(0,c.Cb)({type:Boolean})],iS.prototype,"failed",void 0),iT([(0,c.Cb)()],iS.prototype,"onClick",void 0),iT([(0,c.Cb)()],iS.prototype,"symbol",void 0),iT([(0,c.Cb)()],iS.prototype,"icon",void 0),iS=iT([(0,s.customElement)("w3m-onramp-activity-item")],iS);var iA=l.iv`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`,i_=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let iE=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=n.WM.state.currencyImages,this.tokenImages=n.WM.state.tokenImages,this.unsubscribe.push(n.ph.subscribeKey("purchaseCurrency",e=>{e&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(e))}),n.ph.subscribeKey("paymentCurrency",e=>{e&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(e))}),n.ph.subscribe(e=>{"Fiat"===this.type?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)}),n.WM.subscribe(e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}}))}firstUpdated(){n.ph.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.selectedCurrency?.symbol||"",t=this.currencyImages[e]||this.tokenImages[e];return l.dy`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?l.dy` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>n.IN.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${d(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:l.dy`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};iE.styles=iA,i_([(0,c.Cb)({type:String})],iE.prototype,"type",void 0),i_([(0,c.Cb)({type:Number})],iE.prototype,"value",void 0),i_([(0,c.SB)()],iE.prototype,"currencies",void 0),i_([(0,c.SB)()],iE.prototype,"selectedCurrency",void 0),i_([(0,c.SB)()],iE.prototype,"currencyImages",void 0),i_([(0,c.SB)()],iE.prototype,"tokenImages",void 0),iE=i_([(0,s.customElement)("w3m-onramp-input")],iE);var i$=l.iv`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`,iR=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let iP=class extends l.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return l.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${d(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?l.dy`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:l.dy`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){let e=n.fB.getRequestedCaipNetworks(),t=e?.filter(e=>e?.imageId)?.slice(0,5);return l.dy`
      <wui-flex class="networks">
        ${t?.map(e=>l.dy`
            <wui-flex class="network-icon">
              <wui-image src=${d(n.fz.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};iP.styles=[i$],iR([(0,c.Cb)({type:Boolean})],iP.prototype,"disabled",void 0),iR([(0,c.Cb)()],iP.prototype,"color",void 0),iR([(0,c.Cb)()],iP.prototype,"name",void 0),iR([(0,c.Cb)()],iP.prototype,"label",void 0),iR([(0,c.Cb)()],iP.prototype,"feeRange",void 0),iR([(0,c.Cb)({type:Boolean})],iP.prototype,"loading",void 0),iR([(0,c.Cb)()],iP.prototype,"onClick",void 0),iP=iR([(0,s.customElement)("w3m-onramp-provider-item")],iP);var iN=l.iv`
  wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;let iI=class extends l.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=n.hD.state;return e||t?l.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=n.hD.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=n.hD.state;return e?l.dy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=n.hD.state;return e?l.dy`<a href=${e}>Privacy Policy</a>`:null}};iI.styles=[iN],iI=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-legal-footer")],iI);var iO=l.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,iD=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ij=class extends l.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:i,chrome_store:r,homepage:o}=this.wallet,a=n.j1.isMobile(),c=n.j1.isIos(),u=n.j1.isAndroid(),d=[t,i,o,r].filter(Boolean).length>1,p=s.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return d&&!a?l.dy`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${()=>n.Pc.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!d&&o?l.dy`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&c?l.dy`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&u?l.dy`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&n.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&n.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&n.j1.openHref(this.wallet.homepage,"_blank")}};ij.styles=[iO],iD([(0,c.Cb)({type:Object})],ij.prototype,"wallet",void 0),ij=iD([(0,s.customElement)("w3m-mobile-download-links")],ij);var iU=l.iv`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;let iB=class extends l.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=n.hD.state;return e||t?l.dy`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return l.dy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){n.Xs.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:n.Ni.state.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),n.Pc.push("WhatIsABuy")}};iB.styles=[iU],iB=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-onramp-providers-footer")],iB);var iM=l.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,iL=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let iz={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},iW=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=n.KC.state.open,this.unsubscribe.push(n.KC.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=n.KC.state,i=iz[t];return l.dy`
      <wui-snackbar
        message=${e}
        backgroundColor=${i?.backgroundColor}
        iconColor=${i?.iconColor}
        icon=${i?.icon}
        .loading=${"loading"===t}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>n.KC.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};iW.styles=iM,iL([(0,c.SB)()],iW.prototype,"open",void 0),iW=iL([(0,s.customElement)("w3m-snackbar")],iW);var iZ=l.iv`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`,iH=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let iV=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.formRef=ew(),this.connectors=n.AA.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(n.AA.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=this.connectors.find(e=>"AUTH"===e.type),t=this.connectors.length>1;return e?.email?l.dy`
      <form ${ev(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e.socials||!t?null:l.dy`<wui-flex .padding=${["xxs","0","0","0"]}>
            <wui-separator text="or"></wui-separator>
          </wui-flex>`}
    `:null}submitButtonTemplate(){let e=!this.loading&&this.email.length>3;return e?l.dy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?l.dy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=n.AA.getAuthConnector();if(!t)throw Error("w3m-email-login-widget: Auth connector not found");let{action:i}=await t.provider.connectEmail({email:this.email});n.Xs.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===i?(n.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),n.Pc.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===i&&n.Pc.push("EmailVerifyDevice",{email:this.email})}catch(t){let e=n.j1.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":n.KC.showError(t)}finally{this.loading=!1}}onFocusEvent(){n.Xs.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};iV.styles=iZ,iH([(0,c.SB)()],iV.prototype,"connectors",void 0),iH([(0,c.SB)()],iV.prototype,"email",void 0),iH([(0,c.SB)()],iV.prototype,"loading",void 0),iH([(0,c.SB)()],iV.prototype,"error",void 0),iV=iH([(0,s.customElement)("w3m-email-login-widget")],iV);var iF=l.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`,iY=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let iK=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.address=n.Ni.state.address,this.profileImage=n.Ni.state.profileImage,this.profileName=n.Ni.state.profileName,this.network=n.fB.state.caipNetwork,this.disconnecting=!1,this.balance=n.Ni.state.balance,this.balanceSymbol=n.Ni.state.balanceSymbol,this.unsubscribe.push(...[n.Ni.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):this.disconnecting||n.KC.showError("Account not found")}),n.fB.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)})])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=n.fz.getNetworkImage(this.network);return l.dy`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${n.RY.state.activeChain===Q.bq.CHAIN.EVM?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200"
            >${n.j1.formatBalance(this.balance,this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${d(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()} ${this.swapsTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){let{enableOnramp:e}=n.hD.state,t=n.RY.state.activeChain===Q.bq.CHAIN.SOLANA;return!e||t?null:l.dy`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `}activityTemplate(){let e=n.RY.state.activeChain===Q.bq.CHAIN.SOLANA;return l.dy` <wui-list-item
      iconVariant="blue"
      icon="clock"
      iconSize="sm"
      ?chevron=${!e}
      ?disabled=${e}
      @click=${this.onTransactions.bind(this)}
    >
      <wui-text variant="paragraph-500" color="fg-100" ?disabled=${e}> Activity </wui-text>
      ${e?l.dy`<wui-tag variant="main">Coming soon</wui-tag>`:""}
    </wui-list-item>`}swapsTemplate(){let{enableSwaps:e}=n.hD.state;return e?l.dy`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){let e=n.MO.getConnectedConnector(),t=n.AA.getAuthConnector(),{origin:i}=location;return!t||"AUTH"!==e||i.includes(n.bq.SECURE_SITE)?null:l.dy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){n.Pc.push("SwitchAddress")}handleClickPay(){n.Pc.push("OnRampProviders")}handleClickSwap(){n.Pc.push("Swap")}explorerBtnTemplate(){let e=n.Ni.state.addressExplorerUrl;return e?l.dy`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return l.dy`
      <wui-avatar
        alt=${d(this.address)}
        address=${d(this.address)}
        imageSrc=${d(null===this.profileImage?void 0:this.profileImage)}
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?s.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):s.UiHelperUtil.getTruncateString({string:this.address?this.address:"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=n.Ni.state.allAccounts?.find(e=>e.address===this.address),t=n.Ni.state.addressLabels.get(this.address);return l.dy`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${d(this.address)}
        icon="${e?.type===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&n.RY.state.activeChain===Q.bq.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${d(this.profileImage?this.profileImage:void 0)}
        profileName=${d(t||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}isAllowedNetworkSwitch(){let e=n.fB.getRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find(({id:e})=>e===this.network?.id);return t||!i}onCopyAddress(){try{this.address&&(n.j1.copyToClopboard(this.address),n.KC.showSuccess("Address copied"))}catch{n.KC.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(n.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"}),n.Pc.push("Networks"))}onTransactions(){n.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:n.Ni.state.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),n.Pc.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await n.lZ.disconnect(),n.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),n.IN.close()}catch{n.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),n.KC.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){let e=n.Ni.state.addressExplorerUrl;e&&n.j1.openHref(e,"_blank")}onGoToUpgradeView(){n.Xs.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),n.Pc.push("UpgradeEmailWallet")}};iK.styles=iF,iY([(0,c.SB)()],iK.prototype,"address",void 0),iY([(0,c.SB)()],iK.prototype,"profileImage",void 0),iY([(0,c.SB)()],iK.prototype,"profileName",void 0),iY([(0,c.SB)()],iK.prototype,"network",void 0),iY([(0,c.SB)()],iK.prototype,"disconnecting",void 0),iY([(0,c.SB)()],iK.prototype,"balance",void 0),iY([(0,c.SB)()],iK.prototype,"balanceSymbol",void 0),iK=iY([(0,s.customElement)("w3m-account-default-widget")],iK);var iq=l.iv`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,iG=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let iX=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.address=n.Ni.state.address,this.profileImage=n.Ni.state.profileImage,this.profileName=n.Ni.state.profileName,this.smartAccountDeployed=n.Ni.state.smartAccountDeployed,this.network=n.fB.state.caipNetwork,this.currentTab=n.Ni.state.currentTab,this.tokenBalance=n.Ni.state.tokenBalance,this.preferredAccountType=n.Ni.state.preferredAccountType,this.unsubscribe.push(...[n.Ni.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed,this.preferredAccountType=e.preferredAccountType):n.IN.close()})],n.fB.subscribeKey("caipNetwork",e=>{this.network=e})),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){n.Ni.fetchTokenBalance()}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=n.fz.getNetworkImage(this.network);return l.dy`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.network&&l.dy`<wui-network-icon .network=${this.network}></wui-network-icon>`}
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${d(this.address)}
        networkSrc=${d(e)}
        icon="chevronBottom"
        avatarSrc=${d(this.profileImage?this.profileImage:void 0)}
        profileName=${this.profileName}
        data-testid="w3m-profile-button"
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <w3m-tooltip-trigger text="Buy">
          <wui-icon-button
            data-testid="wallet-features-onramp-button"
            @click=${this.onBuyClick.bind(this)}
            icon="card"
          ></wui-icon-button>
        </w3m-tooltip-trigger>
        ${this.swapsTemplate()}
        <w3m-tooltip-trigger text="Receive">
          <wui-icon-button
            data-testid="wallet-features-receive-button"
            @click=${this.onReceiveClick.bind(this)}
            icon="arrowBottomCircle"
          >
          </wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Send">
          <wui-icon-button
            data-testid="wallet-features-send-button"
            @click=${this.onSendClick.bind(this)}
            icon="send"
          ></wui-icon-button>
        </w3m-tooltip-trigger>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${n.j1.isMobile()&&window.innerWidth<430?`${(window.innerWidth-48)/3}px`:"104px"}
        .tabs=${tj.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}swapsTemplate(){let{enableSwaps:e}=n.hD.state;return e?l.dy`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swap-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval(()=>n.Ni.fetchTokenBalance(),1e4)}listContentTemplate(){return 0===this.currentTab?l.dy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?l.dy`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?l.dy`<w3m-account-activity-widget></w3m-account-activity-widget>`:l.dy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){let e=n.j1.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:i="00"}=n.j1.formatTokenBalance(e);return l.dy`<wui-balance dollars=${t} pennies=${i}></wui-balance>`}return l.dy`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){let e=n.fB.checkIfSmartAccountEnabled();return!e||this.preferredAccountType!==R.y_.ACCOUNT_TYPES.EOA||this.smartAccountDeployed?null:l.dy` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){n.Ni.setCurrentTab(e)}onProfileButtonClick(){n.Pc.push("Profile")}onBuyClick(){n.Pc.push("OnRampProviders")}onSwapClick(){this.network?.id&&!n.bq.SWAP_SUPPORTED_NETWORKS.includes(this.network?.id)?n.Pc.push("UnsupportedChain",{swapUnsupportedChain:!0}):(n.Xs.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.id||"",isSmartAccount:n.Ni.state.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),n.Pc.push("Swap"))}onReceiveClick(){n.Pc.push("WalletReceive")}onSendClick(){n.Xs.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.id||"",isSmartAccount:n.Ni.state.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),n.Pc.push("WalletSend")}onUpdateToSmartAccount(){n.Pc.push("UpgradeToSmartAccount")}};iX.styles=iq,iG([(0,c.SB)()],iX.prototype,"watchTokenBalance",void 0),iG([(0,c.SB)()],iX.prototype,"address",void 0),iG([(0,c.SB)()],iX.prototype,"profileImage",void 0),iG([(0,c.SB)()],iX.prototype,"profileName",void 0),iG([(0,c.SB)()],iX.prototype,"smartAccountDeployed",void 0),iG([(0,c.SB)()],iX.prototype,"network",void 0),iG([(0,c.SB)()],iX.prototype,"currentTab",void 0),iG([(0,c.SB)()],iX.prototype,"tokenBalance",void 0),iG([(0,c.SB)()],iX.prototype,"preferredAccountType",void 0),iX=iG([(0,s.customElement)("w3m-account-wallet-features-widget")],iX);var iQ=l.iv`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;let iJ=class extends l.oi{render(){return l.dy`<w3m-activity-list page="account"></w3m-activity-list>`}};iJ.styles=iQ,iJ=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-account-activity-widget")],iJ);var i0=l.iv`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;let i1=class extends l.oi{render(){return l.dy`${this.nftTemplate()}`}nftTemplate(){return l.dy` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">Coming soon</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive funds</wui-link>
    </wui-flex>`}onReceiveClick(){n.Pc.push("WalletReceive")}};i1.styles=i0,i1=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-account-nfts-widget")],i1);var i2=l.iv`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`,i3=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let i5=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.tokenBalance=n.Ni.state.tokenBalance,this.unsubscribe.push(...[n.Ni.subscribe(e=>{this.tokenBalance=e.tokenBalance})])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l.dy`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?l.dy`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:l.dy` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){return this.tokenBalance?.map(e=>l.dy`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){n.Pc.push("WalletReceive")}onBuyClick(){n.Xs.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:n.Ni.state.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),n.Pc.push("OnRampProviders")}};i5.styles=i2,i3([(0,c.SB)()],i5.prototype,"tokenBalance",void 0),i5=i3([(0,s.customElement)("w3m-account-tokens-widget")],i5);var i4=l.iv`
  :host {
    min-height: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`,i6=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let i8="last-transaction",i9=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.isSolana=n.RY.state.activeChain===Q.bq.CHAIN.SOLANA,this.address=n.Ni.state.address,this.transactionsByYear=n.sl.state.transactionsByYear,this.loading=n.sl.state.loading,this.empty=n.sl.state.empty,this.next=n.sl.state.next,n.sl.clearCursor(),this.unsubscribe.push(...[n.RY.subscribeKey("activeChain",e=>{this.isSolana=e===Q.bq.CHAIN.SOLANA}),n.Ni.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,n.sl.resetTransactions(),n.sl.fetchTransactions(e.address))}),n.sl.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next})])}firstUpdated(){if(this.isSolana){this.loading=!1,this.empty=!0;return}n.sl.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l.dy` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}templateTransactionsByYear(){let e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((t,i)=>{let r=i===e.length-1,o=parseInt(t,10),a=Array(12).fill(null).map((e,t)=>t).reverse();return a.map(e=>{let t=s.TransactionUtil.getTransactionGroupTitle(o,e),i=this.transactionsByYear[o]?.[e];return i?l.dy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${t}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(i,r)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){let{date:i,descriptions:r,direction:o,isAllNFT:a,images:n,status:c,transfers:u,type:d}=this.getTransactionListItemProps(e),p=u?.length>1,h=u?.length===2;return h&&!a?l.dy`
        <wui-transaction-list-item
          date=${i}
          .direction=${o}
          id=${t&&this.next?i8:""}
          status=${c}
          type=${d}
          .images=${n}
          .descriptions=${r}
        ></wui-transaction-list-item>
      `:p?u.map((e,r)=>{let o=s.TransactionUtil.getTransferDescription(e),a=t&&r===u.length-1;return l.dy` <wui-transaction-list-item
          date=${i}
          direction=${e.direction}
          id=${a&&this.next?i8:""}
          status=${c}
          type=${d}
          .onlyDirectionIcon=${!0}
          .images=${[n[r]]}
          .descriptions=${[o]}
        ></wui-transaction-list-item>`}):l.dy`
      <wui-transaction-list-item
        date=${i}
        .direction=${o}
        id=${t&&this.next?i8:""}
        status=${c}
        type=${d}
        .images=${n}
        .descriptions=${r}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((i,r)=>{let o=t&&r===e.length-1;return l.dy`${this.templateRenderTransaction(i,o)}`})}emptyStateActivity(){let e=l.dy`
      <wui-text align="center" variant="paragraph-500" color="fg-100"
        >Transaction history is coming soon!</wui-text
      >
    `,t=l.dy` <wui-text align="center" variant="paragraph-500" color="fg-100"
        >No Transactions yet</wui-text
      >
      <wui-text align="center" variant="small-500" color="fg-200"
        >Start trading on dApps <br />
        to grow your wallet!</wui-text
      >`;return l.dy`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        ${this.isSolana?e:t}
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){let e=l.dy`
      <wui-text variant="paragraph-500" align="center" color="fg-100"
        >Transaction history is coming soon!</wui-text
      >
    `,t=l.dy` <wui-text variant="paragraph-500" align="center" color="fg-100"
        >No activity yet</wui-text
      >
      <wui-text variant="small-400" align="center" color="fg-200"
        >Your next transactions will appear here</wui-text
      >`;return l.dy`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        ${this.isSolana?e:t}
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?l.dy`${this.emptyStateAccount()}`:l.dy`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(l.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){n.Pc.push("WalletReceive")}createPaginationObserver(){let{projectId:e}=n.hD.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(n.sl.fetchTransactions(this.address),n.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next,isSmartAccount:n.Ni.state.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let e=this.shadowRoot?.querySelector(`#${i8}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){let t=Q.Em.formatDate(e?.metadata?.minedAt),i=s.TransactionUtil.getTransactionDescriptions(e),r=e?.transfers,o=e?.transfers?.[0],a=!!o&&e?.transfers?.every(e=>!!e.nft_info),n=s.TransactionUtil.getTransactionImages(r);return{date:t,direction:o?.direction,descriptions:i,isAllNFT:a,images:n,status:e.metadata?.status,transfers:r,type:e.metadata?.operationType}}};i9.styles=i4,i6([(0,c.Cb)()],i9.prototype,"page",void 0),i6([(0,c.SB)()],i9.prototype,"isSolana",void 0),i6([(0,c.SB)()],i9.prototype,"address",void 0),i6([(0,c.SB)()],i9.prototype,"transactionsByYear",void 0),i6([(0,c.SB)()],i9.prototype,"loading",void 0),i6([(0,c.SB)()],i9.prototype,"empty",void 0),i6([(0,c.SB)()],i9.prototype,"next",void 0),i9=i6([(0,s.customElement)("w3m-activity-list")],i9);var i7=l.iv`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`,re=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rt=class extends l.oi{render(){return l.dy` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?l.dy`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:l.dy`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){n.Pc.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){let e=this.token.price,t=e*this.sendTokenAmount;return l.dy`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${t?`$${s.UiHelperUtil.formatNumberToLocalString(t,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?l.dy` <wui-text variant="small-400" color="error-100">
          ${s.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:l.dy` <wui-text variant="small-400" color="fg-200">
        ${s.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?l.dy`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:l.dy`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){n.Si.setTokenAmount(e.detail)}onMaxClick(){if(this.token&&this.gasPriceInUSD){let e=Q.C6.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.token.price),t=void 0===this.token.address,i=t?Q.C6.bigNumber(this.token.quantity.numeric).minus(e):Q.C6.bigNumber(this.token.quantity.numeric);n.Si.setTokenAmount(Number(i.toFixed(20)))}}onBuyClick(){n.Pc.push("OnRampProviders")}};rt.styles=i7,re([(0,c.Cb)({type:Object})],rt.prototype,"token",void 0),re([(0,c.Cb)({type:Number})],rt.prototype,"sendTokenAmount",void 0),re([(0,c.Cb)({type:Number})],rt.prototype,"gasPriceInUSD",void 0),rt=re([(0,s.customElement)("w3m-input-token")],rt);var ri=l.iv`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`,rr=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ro=class extends l.oi{constructor(){super(...arguments),this.inputElementRef=ew(),this.instructionElementRef=ew(),this.instructionHidden=!!this.value,this.pasting=!1,this.onDebouncedSearch=n.j1.debounce(async e=>{let t=await n.lZ.getEnsAddress(e);if(n.Si.setLoading(!1),t){n.Si.setReceiverProfileName(e),n.Si.setReceiverAddress(t);let i=await n.lZ.getEnsAvatar(e);i&&n.Si.setReceiverProfileImageUrl(i)}else n.Si.setReceiverAddress(e),n.Si.setReceiverProfileName(void 0),n.Si.setReceiverProfileImageUrl(void 0)})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return l.dy` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${ev(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${ev(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}async focusInput(){this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",this.inputElementRef.value?.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){this.value||this.instructionHidden||this.focusInput()}onBlur(){this.value||!this.instructionHidden||this.pasting||this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;let e=await navigator.clipboard.readText();n.Si.setReceiverAddress(e),this.focusInput()}onInputChange(e){this.pasting=!1;let t=e.target;t.value&&!this.instructionHidden&&this.focusInput(),n.Si.setLoading(!0),this.onDebouncedSearch(t.value)}};ro.styles=ri,rr([(0,c.Cb)()],ro.prototype,"value",void 0),rr([(0,c.SB)()],ro.prototype,"instructionHidden",void 0),rr([(0,c.SB)()],ro.prototype,"pasting",void 0),ro=rr([(0,s.customElement)("w3m-input-address")],ro);var ra=l.iv`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`,rn=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rs=class extends l.oi{render(){return l.dy` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${d(s.UiHelperUtil.formatNumberToLocalString(this.networkFee,2))}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${s.UiHelperUtil.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?l.dy` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${d(n.fz.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&n.Pc.push("Networks",{network:e})}};rs.styles=ra,rn([(0,c.Cb)()],rs.prototype,"receiverAddress",void 0),rn([(0,c.Cb)({type:Object})],rs.prototype,"caipNetwork",void 0),rn([(0,c.Cb)({type:Number})],rs.prototype,"networkFee",void 0),rs=rn([(0,s.customElement)("w3m-wallet-send-details")],rs);var rl=l.iv`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,rc=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ru=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.open=n.fw.state.open,this.message=n.fw.state.message,this.triggerRect=n.fw.state.triggerRect,this.variant=n.fw.state.variant,this.unsubscribe.push(...[n.fw.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant})])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;let e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,l.dy`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};ru.styles=[rl],rc([(0,c.SB)()],ru.prototype,"open",void 0),rc([(0,c.SB)()],ru.prototype,"message",void 0),rc([(0,c.SB)()],ru.prototype,"triggerRect",void 0),rc([(0,c.SB)()],ru.prototype,"variant",void 0),ru=rc([(0,s.customElement)("w3m-tooltip")],ru);var rd=l.iv`
  :host {
    width: 100%;
    display: block;
  }
`,rp=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rh=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.text="",this.open=n.fw.state.open,this.unsubscribe.push(n.Pc.subscribeKey("view",()=>{n.fw.hide()}),n.IN.subscribeKey("open",e=>{e||n.fw.hide()}),n.fw.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),n.fw.hide()}render(){return l.dy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return l.dy`<slot></slot> `}onMouseEnter(){let e=this.getBoundingClientRect();this.open||n.fw.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||n.fw.hide()}};rh.styles=[rd],rp([(0,c.Cb)()],rh.prototype,"text",void 0),rp([(0,c.SB)()],rh.prototype,"open",void 0),rh=rp([(0,s.customElement)("w3m-tooltip-trigger")],rh);var rg=l.iv`
  :host > wui-flex:first-child {
    margin-top: var(--wui-spacing-s);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,rw=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rf=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.connectors=n.AA.state.connectors,this.connector=this.connectors.find(e=>"AUTH"===e.type),this.unsubscribe.push(n.AA.subscribeKey("connectors",e=>{this.connectors=e,this.connector=this.connectors.find(e=>"AUTH"===e.type)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.connector?.socials?l.dy`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        .padding=${["0","0","xs","0"]}
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
      ${this.separatorTemplate()}
    `:null}topViewTemplate(){return this.connector?.socials?2===this.connector.socials.length?l.dy` <wui-flex gap="xs">
        ${this.connector.socials.slice(0,2).map(e=>l.dy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
            ></wui-logo-select>`)}
      </wui-flex>`:l.dy` <wui-list-social
      data-testid=${`social-selector-${this.connector?.socials?.[0]}`}
      @click=${()=>{this.onSocialClick(this.connector?.socials?.[0])}}
      logo=${d(this.connector.socials[0])}
      align="center"
      name=${`Continue with ${this.connector.socials[0]}`}
    ></wui-list-social>`:null}bottomViewTemplate(){return!this.connector?.socials||this.connector?.socials.length<=2?null:this.connector?.socials.length>6?l.dy`<wui-flex gap="xs">
        ${this.connector.socials.slice(1,5).map(e=>l.dy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
            ></wui-logo-select>`)}
        <wui-logo-select logo="more" @click=${this.onMoreSocialsClick.bind(this)}></wui-logo-select>
      </wui-flex>`:l.dy`<wui-flex gap="xs">
      ${this.connector.socials.slice(1,this.connector.socials.length).map(e=>l.dy`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
          ></wui-logo-select>`)}
    </wui-flex>`}separatorTemplate(){let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);return e?l.dy`<wui-separator text="or"></wui-separator>`:null}onMoreSocialsClick(){n.Pc.push("ConnectSocials")}async onSocialClick(e){if(e&&(n.Ni.setSocialProvider(e,n.RY.state.activeChain),n.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}})),e===a.Farcaster){n.Pc.push("ConnectingFarcaster");let e=n.AA.getAuthConnector();if(e&&!n.Ni.state.farcasterUrl)try{let{url:t}=await e.provider.getFarcasterUri();n.Ni.setFarcasterUrl(t)}catch(e){n.Pc.goBack(),n.KC.showError(e)}}else{n.Pc.push("ConnectingSocial");let t=n.AA.getAuthConnector();this.popupWindow=n.j1.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(t&&e){let{uri:i}=await t.provider.getSocialRedirectUri({provider:e});if(this.popupWindow&&i)n.Ni.setSocialWindow(this.popupWindow,n.RY.state.activeChain),this.popupWindow.location.href=i;else throw this.popupWindow?.close(),Error("Something went wrong")}}catch(e){this.popupWindow?.close(),n.KC.showError("Something went wrong")}}}};rf.styles=rg,rw([(0,c.SB)()],rf.prototype,"connectors",void 0),rf=rw([(0,s.customElement)("w3m-social-login-widget")],rf);let rm=class extends l.oi{render(){return l.dy`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list></w3m-connector-list>
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>
    `}};rm=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-wallet-login-list")],rm);var rv=l.iv`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,rb=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ry=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.connectors=n.AA.state.connectors,this.connector=this.connectors.find(e=>"AUTH"===e.type),this.unsubscribe.push(n.AA.subscribeKey("connectors",e=>{this.connectors=e,this.connector=this.connectors.find(e=>"AUTH"===e.type)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.connector?.socials?l.dy` <wui-flex flexDirection="column" gap="xs">
      ${this.connector.socials.map(e=>l.dy`<wui-list-social
            @click=${()=>{this.onSocialClick(e)}}
            name=${e}
            logo=${e}
          ></wui-list-social>`)}
    </wui-flex>`:null}async onSocialClick(e){if(e&&(n.Ni.setSocialProvider(e,n.RY.state.activeChain),n.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}})),e===a.Farcaster){n.Pc.push("ConnectingFarcaster");let e=n.AA.getAuthConnector();if(e&&!n.Ni.state.farcasterUrl)try{let{url:t}=await e.provider.getFarcasterUri();n.Ni.setFarcasterUrl(t)}catch(e){n.Pc.goBack(),n.KC.showError(e)}}else{n.Pc.push("ConnectingSocial");let t=n.AA.getAuthConnector();this.popupWindow=n.j1.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(t&&e){let{uri:i}=await t.provider.getSocialRedirectUri({provider:e});if(this.popupWindow&&i)n.Ni.setSocialWindow(this.popupWindow,n.RY.state.activeChain),this.popupWindow.location.href=i;else throw this.popupWindow?.close(),Error("Something went wrong")}}catch(e){this.popupWindow?.close(),n.KC.showError("Something went wrong")}}}};ry.styles=rv,rb([(0,c.SB)()],ry.prototype,"connectors",void 0),ry=rb([(0,s.customElement)("w3m-social-login-list")],ry);var rx=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rC=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.connectors=n.AA.state.connectors,this.unsubscribe.push(n.AA.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"ANNOUNCED"===e.type);return e?.length?l.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>e.info?.rdns&&n.QT.state.excludedRDNS&&n.QT.state.excludedRDNS.includes(e?.info?.rdns)?null:l.dy`
            <wui-list-wallet
              imageSrc=${d(n.fz.getConnectorImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnector(e)}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              .installed=${!0}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){"WALLET_CONNECT"===e.type?n.j1.isMobile()?n.Pc.push("AllWallets"):n.Pc.push("ConnectingWalletConnect"):n.Pc.push("ConnectingExternal",{connector:e})}};rx([(0,c.SB)()],rC.prototype,"connectors",void 0),rC=rx([(0,s.customElement)("w3m-connect-announced-widget")],rC);var rk=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rT=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.connectors=n.AA.state.connectors,this.unsubscribe.push(n.AA.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{customWallets:e}=n.hD.state;if(!e?.length)return this.style.cssText="display: none",null;let t=this.filterOutDuplicateWallets(e);return l.dy`<wui-flex flexDirection="column" gap="xs">
      ${t.map(e=>l.dy`
          <wui-list-wallet
            imageSrc=${d(n.fz.getWalletImage(e))}
            name=${e.name??"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            data-testid=${`wallet-selector-${e.id}`}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){let t=n.MO.getRecentWallets(),i=this.connectors.map(e=>e.info?.rdns).filter(Boolean),r=t.map(e=>e.rdns).filter(Boolean),o=i.concat(r);if(o.includes("io.metamask.mobile")&&n.j1.isMobile()){let e=o.indexOf("io.metamask.mobile");o[e]="io.metamask"}let a=e.filter(e=>!o.includes(String(e?.rdns)));return a}onConnectWallet(e){n.Pc.push("ConnectingWalletConnect",{wallet:e})}};rk([(0,c.SB)()],rT.prototype,"connectors",void 0),rT=rk([(0,s.customElement)("w3m-connect-custom-widget")],rT);let rS={filterOutDuplicatesByRDNS(e){let t=n.hD.state.enableEIP6963?n.AA.state.connectors:[],i=n.MO.getRecentWallets(),r=t.map(e=>e.info?.rdns).filter(Boolean),o=i.map(e=>e.rdns).filter(Boolean),a=r.concat(o);if(a.includes("io.metamask.mobile")&&n.j1.isMobile()){let e=a.indexOf("io.metamask.mobile");a[e]="io.metamask"}let s=e.filter(e=>!a.includes(String(e?.rdns)));return s},filterOutDuplicatesByIds(e){let t=n.AA.state.connectors,i=n.MO.getRecentWallets(),r=t.map(e=>e.explorerId),o=i.map(e=>e.id),a=r.concat(o),s=e.filter(e=>!a.includes(e?.id));return s},filterOutDuplicateWallets(e){let t=this.filterOutDuplicatesByRDNS(e),i=this.filterOutDuplicatesByIds(t);return i}},rA=class extends l.oi{constructor(){super(...arguments),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{featured:e}=n.QT.state;if(!e.length)return this.style.cssText="display: none",null;let t=rS.filterOutDuplicateWallets(e);return l.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>l.dy`
            <wui-list-wallet
              imageSrc=${d(n.fz.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){let t=n.AA.getConnector(e.id,e.rdns);t?n.Pc.push("ConnectingExternal",{connector:t}):n.Pc.push("ConnectingWalletConnect",{wallet:e})}};rA=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-connect-featured-widget")],rA);var r_=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rE=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.connectors=n.AA.state.connectors,this.unsubscribe.push(n.AA.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"INJECTED"===e.type);return e?.length&&(1!==e.length||e[0]?.name!=="Browser Wallet"||n.j1.isMobile())?l.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>n.j1.isMobile()||"Browser Wallet"!==e.name?n.lZ.checkInstalled()?e.info?.rdns&&n.QT.state.excludedRDNS&&n.QT.state.excludedRDNS.includes(e?.info?.rdns)?null:l.dy`
            <wui-list-wallet
              imageSrc=${d(n.fz.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
            >
            </wui-list-wallet>
          `:(this.style.cssText="display: none",null):null)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){n.Pc.push("ConnectingExternal",{connector:e})}};r_([(0,c.SB)()],rE.prototype,"connectors",void 0),rE=r_([(0,s.customElement)("w3m-connect-injected-widget")],rE);var r$=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rR=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.connectors=n.AA.state.connectors,this.unsubscribe.push(n.AA.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>"coinbaseWalletSDK"===e.id);return e?l.dy`
      <wui-flex flexDirection="column" gap="xs">
        <wui-list-wallet
          imageSrc=${d(n.fz.getConnectorImage(e))}
          .installed=${!0}
          name=${d(e.name)}
          data-testid=${`wallet-selector-${e.id}`}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      </wui-flex>
    `:(this.style.cssText="display: none",null)}async onCoinbaseConnector(e){try{n.lZ.setWcError(!1),e.imageUrl&&n.MO.setConnectedWalletImageUrl(e.imageUrl),await n.lZ.connectExternal(e),n.hD.state.isSiweEnabled?n.Pc.push("ConnectingSiwe"):n.IN.close(),n.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:e.name||"Unknown"}})}catch(e){n.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),n.lZ.setWcError(!0)}}onConnector(e){n.Pc.push("ConnectingExternal",{connector:e}),e.id===Z.COINBASE_SDK_CONNECTOR_ID&&this.onCoinbaseConnector(e)}};r$([(0,c.SB)()],rR.prototype,"connectors",void 0),rR=r$([(0,s.customElement)("w3m-connect-coinbase-widget")],rR);var rP=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rN=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.connectors=n.AA.state.connectors,this.unsubscribe.push(n.AA.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"EXTERNAL"===e.type),t=e.filter(e=>"coinbaseWalletSDK"!==e.id);return t?.length?l.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>l.dy`
            <wui-list-wallet
              imageSrc=${d(n.fz.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){n.Pc.push("ConnectingExternal",{connector:e})}};rP([(0,c.SB)()],rN.prototype,"connectors",void 0),rN=rP([(0,s.customElement)("w3m-connect-external-widget")],rN);let rI=class extends l.oi{render(){let e=n.MO.getRecentWallets();return e?.length?l.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>l.dy`
            <wui-list-wallet
              imageSrc=${d(n.fz.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){n.Pc.push("ConnectingWalletConnect",{wallet:e})}};rI=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-connect-recent-widget")],rI);var rO=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rD=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.connectors=n.AA.state.connectors,this.unsubscribe.push(n.AA.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);if(!e)return null;let{recommended:t}=n.QT.state,{customWallets:i,featuredWalletIds:r}=n.hD.state,{connectors:o}=n.AA.state,a=n.MO.getRecentWallets(),s=o.filter(e=>"INJECTED"===e.type||"ANNOUNCED"===e.type),c=s.filter(e=>"Browser Wallet"!==e.name);if(r||i||!t.length)return this.style.cssText="display: none",null;let u=c.length+a.length,p=rS.filterOutDuplicateWallets(t).slice(0,Math.max(0,2-u));return p.length?l.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${p.map(e=>l.dy`
            <wui-list-wallet
              imageSrc=${d(n.fz.getWalletImage(e))}
              name=${e?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){let t=n.AA.getConnector(e.id,e.rdns);t?n.Pc.push("ConnectingExternal",{connector:t}):n.Pc.push("ConnectingWalletConnect",{wallet:e})}};rO([(0,c.SB)()],rD.prototype,"connectors",void 0),rD=rO([(0,s.customElement)("w3m-connect-recommended-widget")],rD);var rj=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rU=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.connectors=n.AA.state.connectors,this.unsubscribe.push(n.AA.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(n.j1.isMobile())return this.style.cssText="display: none",null;let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);return e?l.dy`
      <wui-list-wallet
        imageSrc=${d(n.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:(this.style.cssText="display: none",null)}onConnector(e){"WALLET_CONNECT"===e.type?n.j1.isMobile()?n.Pc.push("AllWallets"):n.Pc.push("ConnectingWalletConnect"):n.Pc.push("ConnectingExternal",{connector:e})}};rj([(0,c.SB)()],rU.prototype,"connectors",void 0),rU=rj([(0,s.customElement)("w3m-connect-walletconnect-widget")],rU);var rB=l.iv`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,rM=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rL=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.connectors=n.AA.state.connectors,this.unsubscribe.push(n.AA.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{custom:e,recent:t,announced:i,coinbase:r,injected:o,recommended:a,featured:n,external:s}=this.getConnectorsByType();return l.dy`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connect-walletconnect-widget></w3m-connect-walletconnect-widget>
        ${t.length?l.dy`<w3m-connect-recent-widget></w3m-connect-recent-widget>`:null}
        ${i.length?l.dy`<w3m-connect-announced-widget></w3m-connect-announced-widget>`:null}
        ${o.length?l.dy`<w3m-connect-injected-widget></w3m-connect-injected-widget>`:null}
        ${n.length?l.dy`<w3m-connect-featured-widget></w3m-connect-featured-widget>`:null}
        ${e?.length?l.dy`<w3m-connect-custom-widget></w3m-connect-custom-widget>`:null}
        ${r?l.dy`<w3m-connect-coinbase-widget></w3m-connect-coinbase-widget>`:null}
        ${s.length?l.dy`<w3m-connect-external-widget></w3m-connect-external-widget>`:null}
        ${a.length?l.dy`<w3m-connect-recommended-widget></w3m-connect-recommended-widget>`:null}
      </wui-flex>
    `}getConnectorsByType(){let{featured:e,recommended:t}=n.QT.state,{customWallets:i}=n.hD.state,r=n.MO.getRecentWallets(),o=rS.filterOutDuplicateWallets(t),a=rS.filterOutDuplicateWallets(e),s=this.connectors.filter(e=>"ANNOUNCED"===e.type),l=this.connectors.filter(e=>"INJECTED"===e.type),c=this.connectors.filter(e=>"EXTERNAL"===e.type),u=this.connectors.find(e=>e.id===Z.COINBASE_SDK_CONNECTOR_ID),d=n.RY.state.activeChain===Q.bq.CHAIN.EVM,p=!d||n.hD.state.enableEIP6963;return{custom:i,recent:r,coinbase:u,external:c,announced:p?s:[],injected:p?l:[],recommended:o,featured:a}}};rL.styles=rB,rM([(0,c.SB)()],rL.prototype,"connectors",void 0),rL=rM([(0,s.customElement)("w3m-connector-list")],rL);var rz=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rW=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.connectors=n.AA.state.connectors,this.count=n.QT.state.count,this.unsubscribe.push(n.AA.subscribeKey("connectors",e=>this.connectors=e),n.QT.subscribeKey("count",e=>this.count=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type),{allWallets:t}=n.hD.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!n.j1.isMobile())return null;let i=n.QT.state.featured.length,r=this.count+i,o=r<10?r:10*Math.floor(r/10),a=o<r?`${o}+`:`${o}`;return l.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}onAllWallets(){n.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),n.Pc.push("AllWallets")}};rz([(0,c.SB)()],rW.prototype,"connectors",void 0),rz([(0,c.SB)()],rW.prototype,"count",void 0),rW=rz([(0,s.customElement)("w3m-all-wallets-widget")],rW);let rZ=class extends l.oi{constructor(){super(...arguments),this.socialProvider=n.MO.getConnectedSocialProvider(),this.socialUsername=n.MO.getConnectedSocialUsername()}render(){let e=n.MO.getConnectedConnector(),t=n.AA.getAuthConnector();if(!t||"AUTH"!==e)return this.style.cssText="display: none",null;let i=t.provider.getEmail()??"";return l.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(i,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(i)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,t){t||n.Pc.push("UpdateEmailWallet",{email:e})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};rZ=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,s.customElement)("w3m-account-auth-button")],rZ);let rH=!1;class rV{constructor(e){this.initPromise=void 0,this.setIsConnected=(e,t)=>{n.Ni.setIsConnected(e,t)},this.getIsConnectedState=()=>n.Ni.state.isConnected,this.setAllAccounts=(e=[])=>{n.Ni.setAllAccounts(e),n.hD.setHasMultipleAddresses(e?.length>1)},this.addAddressLabel=(e,t)=>{n.Ni.addAddressLabel(e,t)},this.removeAddressLabel=e=>{n.Ni.removeAddressLabel(e)},this.getCaipAddress=()=>n.Ni.state.caipAddress,this.setCaipAddress=(e,t)=>{n.Ni.setCaipAddress(e,t)},this.setBalance=(e,t,i)=>{n.Ni.setBalance(e,t,i)},this.setProfileName=(e,t)=>{n.Ni.setProfileName(e,t)},this.setProfileImage=(e,t)=>{n.Ni.setProfileImage(e,t)},this.resetAccount=e=>{n.Ni.resetAccount(e)},this.setCaipNetwork=e=>{n.fB.setCaipNetwork(e)},this.getCaipNetwork=()=>n.fB.state.caipNetwork,this.setRequestedCaipNetworks=(e,t)=>{n.fB.setRequestedCaipNetworks(e,t)},this.getApprovedCaipNetworkIds=()=>n.fB.getApprovedCaipNetworkIds(),this.setApprovedCaipNetworksData=()=>n.fB.setApprovedCaipNetworksData(),this.resetNetwork=()=>{n.fB.resetNetwork()},this.setConnectors=e=>{n.AA.setConnectors(e)},this.addConnector=e=>{n.AA.addConnector(e)},this.getConnectors=()=>n.AA.getConnectors(),this.resetWcConnection=()=>{n.lZ.resetWcConnection()},this.fetchIdentity=e=>n.Lr.fetchIdentity(e),this.setAddressExplorerUrl=(e,t)=>{n.Ni.setAddressExplorerUrl(e,t)},this.setSmartAccountDeployed=(e,t)=>{n.Ni.setSmartAccountDeployed(e,t)},this.setConnectedWalletInfo=(e,t)=>{n.Ni.setConnectedWalletInfo(e,t)},this.setSmartAccountEnabledNetworks=(e,t)=>{n.fB.setSmartAccountEnabledNetworks(e,t)},this.setPreferredAccountType=(e,t)=>{n.Ni.setPreferredAccountType(e,t)},this.getWalletConnectName=e=>n.a.getNamesForAddress(e),this.resolveWalletConnectName=async e=>{let t=e.replace(Q.bq.WC_NAME_SUFFIX,""),i=await n.a.resolveName(t),r=Object.values(i?.addresses)||[];return r[0]?.address||!1},this.setEIP6963Enabled=e=>{n.hD.setEIP6963Enabled(e)},this.setClientId=e=>{n.Lr.setClientId(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),n.IN.open(e)}async close(){await this.initOrContinue(),n.IN.close()}setLoading(e){n.IN.setLoading(e)}getThemeMode(){return n.u0.state.themeMode}getThemeVariables(){return n.u0.state.themeVariables}setThemeMode(e){n.u0.setThemeMode(e),(0,s.setColorTheme)(n.u0.state.themeMode)}setThemeVariables(e){n.u0.setThemeVariables(e),(0,s.setThemeVariables)(n.u0.state.themeVariables)}subscribeTheme(e){return n.u0.subscribe(e)}getWalletInfo(){return n.Ni.state.connectedWalletInfo}subscribeWalletInfo(e){return n.Ni.subscribeKey("connectedWalletInfo",e)}subscribeShouldUpdateToAddress(e){n.Ni.subscribeKey("shouldUpdateToAddress",e)}subscribeCaipNetworkChange(e){n.fB.subscribeKey("caipNetwork",e)}getState(){return n.Ie.state}subscribeState(e){return n.Ie.subscribe(e)}showErrorMessage(e){n.KC.showError(e)}showSuccessMessage(e){n.KC.showSuccess(e)}getEvent(){return{...n.Xs.state}}subscribeEvents(e){return n.Xs.subscribe(e)}replace(e){n.Pc.replace(e)}redirect(e){n.Pc.push(e)}popTransactionStack(e){n.Pc.popTransactionStack(e)}isOpen(){return n.IN.state.open}isTransactionStackEmpty(){return 0===n.Pc.state.transactionStack.length}isTransactionShouldReplaceView(){return n.Pc.state.transactionStack[n.Pc.state.transactionStack.length-1]?.replace}async initControllers(e){if(n.RY.initialize([{networkControllerClient:e.networkControllerClient,connectionControllerClient:e.connectionControllerClient,chain:e.chain}]),n.fB.setDefaultCaipNetwork(e.defaultChain,e.chain),n.hD.setProjectId(e.projectId),n.hD.setAllWallets(e.allWallets),n.hD.setIncludeWalletIds(e.includeWalletIds),n.hD.setExcludeWalletIds(e.excludeWalletIds),n.hD.setFeaturedWalletIds(e.featuredWalletIds),n.hD.setTokens(e.tokens),n.hD.setTermsConditionsUrl(e.termsConditionsUrl),n.hD.setPrivacyPolicyUrl(e.privacyPolicyUrl),n.hD.setEnableAnalytics(e.enableAnalytics),n.hD.setCustomWallets(e.customWallets),n.hD.setIsUniversalProvider(e.isUniversalProvider),n.hD.setSdkVersion(e._sdkVersion),n.hD.setOnrampEnabled(!1!==e.enableOnramp),n.hD.setEnableSwaps(e.chain===Q.bq.CHAIN.EVM&&!1!==e.enableSwaps),e.metadata&&n.hD.setMetadata(e.metadata),e.themeMode&&n.u0.setThemeMode(e.themeMode),e.themeVariables&&n.u0.setThemeVariables(e.themeVariables),e.disableAppend&&n.hD.setDisableAppend(!!e.disableAppend),e.allowUnsupportedChain&&n.fB.setAllowUnsupportedChain(e.allowUnsupportedChain),e.siweControllerClient){let{SIWEController:t}=await Promise.all([i.e(9585),i.e(6822)]).then(i.bind(i,38042));t.setSIWEClient(e.siweControllerClient)}}async initOrContinue(){return!this.initPromise&&!rH&&n.j1.isClient()&&(rH=!0,this.initPromise=new Promise(async e=>{await Promise.all([Promise.resolve().then(i.bind(i,49117)),i.e(8874).then(i.bind(i,78874))]);let t=document.createElement("w3m-modal");n.hD.state.disableAppend||document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}class rF extends rV{hasSyncedConnectedAccount=!1;options=void 0;universalProvider;requestedScope;requestedNamespaces;_onSyncAccount;constructor(e){let{universalProvider:t,namespaces:i,...r}=e;if(!t)throw Error("web3modal:constructor - universalProvider is undefined");if(!r.projectId)throw Error("web3modal:constructor - projectId is undefined");super({networkControllerClient:{switchCaipNetwork:async e=>{e&&this.universalProvider.setDefaultChain(e.id)},getApprovedCaipNetworksData:()=>{let e=this.universalProvider?.session?.namespaces[this.requestedScope].accounts,t=e?.map(e=>`${this.requestedScope}:`+e.split(":")[1]);return{supportsAllNetworks:!1,approvedCaipNetworkIds:t}}},connectionControllerClient:{connectWalletConnect:async e=>{this.universalProvider.events.on("display_uri",e),await this.universalProvider.connect({optionalNamespaces:this.requestedNamespaces}),this.universalProvider.removeListener("display_uri",e),this.syncAccount()},disconnect:async()=>{await this.universalProvider.disconnect(),this.syncAccount()}},featuredWalletIds:[],allowUnsupportedChain:!0,chain:Q.bq.CHAIN.EVM,isUniversalProvider:!0,_sdkVersion:`universal-appkit-solana-adapter-${Z.VERSION}`,...{enableOnramp:!1,...r}}),this.options=e,this.requestedScope=Object.keys(i)[0],this.requestedNamespaces=i,this.universalProvider=t;let o="walletConnect";this.setConnectors([{id:o,explorerId:H.ConnectorExplorerIds[o],name:H.ConnectorNamesMap[o],imageId:H.ConnectorImageIds[o],type:H.ConnectorTypesMap[o],info:{rdns:o},chain:Q.bq.CHAIN.EVM}]),this.syncAccount(),this.syncNetwork(),this._onSyncAccount=this.syncAccount.bind(this),t.client.on("session_update",this._onSyncAccount),t.client.on("session_delete",this._onSyncAccount)}async disconnect(){await this.universalProvider.disconnect(),this.syncAccount()}async syncAccount(){this.resetAccount();let e=this.universalProvider.session;if(e){let t=Object.keys(e.namespaces)[0],i=e.namespaces?.[t]?.accounts[0].split(":")[1];this.setIsConnected(!0),this.setCaipAddress(e.namespaces?.[t]?.accounts[0]),this.setCaipNetwork({id:t+i,name:t,imageId:H.EIP155NetworkImageIds[i],imageUrl:this.options?.chainImages?.[i],chain:Q.bq.CHAIN.EVM}),this.hasSyncedConnectedAccount=!0}else this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}syncNetwork(){let e=this.requestedNamespaces[this.requestedScope].chains[0];this.setCaipNetwork({id:e,name:this.requestedScope,imageId:H.EIP155NetworkImageIds[e],imageUrl:this.options?.chainImages?.[e],chain:Q.bq.CHAIN.EVM}),n.QT.reFetchWallets()}}},92361:function(e,t,i){"use strict";i.d(t,{bq:function(){return w},Em:function(){return l},kg:function(){return p},UE:function(){return g},p1:function(){return c},C6:function(){return d},em:function(){return h},tU:function(){return f}});var r=i(27484),o=i(25054),a=i(84110),n=i(70660);r.extend(a),r.extend(n);let s={...o,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}};r.locale("en-web3-modal",s);let l={getYear:(e=new Date().toISOString())=>r(e).year(),getRelativeDateFromNow:e=>r(e).locale("en-web3-modal").fromNow(!0),formatDate:(e,t="DD MMM")=>r(e).format(t)},c={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0};var u=i(70794);let d={bigNumber:e=>new u.O(e),multiply(e,t){if(void 0===e||void 0===t)return u.O(0);let i=new u.O(e),r=new u.O(t);return i.multipliedBy(r)},formatNumberToLocalString:(e,t=2)=>void 0===e?"0.00":"number"==typeof e?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},p={numericInputKeyDown(e,t,i){let r=e.metaKey||e.ctrlKey,o=e.key,a=o.toLocaleLowerCase(),n=","===o,s="."===o,l=o>="0"&&o<="9";r||"a"!==a&&"c"!==a&&"v"!==a&&"x"!==a||e.preventDefault(),"0"!==t||n||s||"0"!==o||e.preventDefault(),"0"===t&&l&&(i(o),e.preventDefault()),(n||s)&&(t||(i("0."),e.preventDefault()),(t?.includes(".")||t?.includes(","))&&e.preventDefault()),l||["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"].includes(o)||s||n||e.preventDefault()}},h=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],g={URLS:{FAQ:"https://walletconnect.com/faq"}},w={WC_NAME_SUFFIX:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CHAIN:{EVM:"evm",SOLANA:"solana"},CHAIN_NAME:{EVM:"Ethereum",SOLANA:"Solana"}};function f(e,t){return"light"===t?{"--w3m-accent":e?.["--w3m-accent"]||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":e?.["--w3m-accent"]||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}},77548:function(e,t,i){"use strict";i.d(t,{Ni:function(){return el},QT:function(){return L},WM:function(){return b},fz:function(){return eC},Lr:function(){return F},RY:function(){return O},lZ:function(){return J},AA:function(){return k},bq:function(){return l},j1:function(){return c},a:function(){return ex},Xs:function(){return R},IN:function(){return eu},fB:function(){return j},ph:function(){return eg},hD:function(){return W},Ie:function(){return S},Pc:function(){return ei},_4:function(){return ek},Si:function(){return ef},KC:function(){return K},MO:function(){return m},nY:function(){return en},u0:function(){return x},fw:function(){return ev},sl:function(){return X}});var r=i(73932),o=i(17832),a=i(92361);let n="https://secure.walletconnect.org",s=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:""}],l={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:n,SECURE_SITE_DASHBOARD:`${n}/dashboard`,SECURE_SITE_FAVICON:`${n}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NATIVE_TOKEN_ADDRESS:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",CONVERT_SLIPPAGE_TOLERANCE:1},c={isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),checkCaipNetwork:(e,t="")=>e?.id.toLocaleLowerCase().includes(t.toLowerCase()),isAndroid(){let e=window.navigator.userAgent.toLowerCase();return c.isMobile()&&e.includes("android")},isIos(){let e=window.navigator.userAgent.toLowerCase();return c.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=l.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=l.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+l.FOUR_MINUTES_MS,getNetworkId:e=>e?.split(":")[1],getPlainAddress:e=>e?.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let i;return(...r)=>{i&&clearTimeout(i),i=setTimeout(function(){e(...r)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(c.isHttpUrl(e))return this.formatUniversalUrl(e,t);let i=e;i.includes("://")||(i=`${i=e.replaceAll("/","").replaceAll(":","")}://`),i.endsWith("/")||(i=`${i}/`);let r=encodeURIComponent(t);return{redirect:`${i}wc?uri=${r}`,href:i}},formatUniversalUrl(e,t){if(!c.isHttpUrl(e))return this.formatNativeUrl(e,t);let i=e;i.endsWith("/")||(i=`${i}/`);let r=encodeURIComponent(t);return{redirect:`${i}wc?uri=${r}`,href:i}},openHref(e,t,i){window.open(e,t,i||"noreferrer noopener")},returnOpenHref:(e,t,i)=>window.open(e,t,i||"noreferrer noopener"),async preloadImage(e){let t=new Promise((t,i)=>{let r=new Image;r.onload=t,r.onerror=i,r.crossOrigin="anonymous",r.src=e});return Promise.race([t,c.wait(2e3)])},formatBalance(e,t){let i;if("0"===e)i="0.000";else if("string"==typeof e){let t=Number(e);t&&(i=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return i?`${i} ${t??""}`:`0.000 ${t??""}`},formatBalance2(e,t){let i;if("0"===e)i="0";else if("string"==typeof e){let t=Number(e);t&&(i=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return{value:i??"0",rest:"0"===i?"000":"",symbol:t}},getApiUrl:()=>a.bq.W3M_API_URL,getBlockchainApiUrl:()=>a.bq.BLOCKCHAIN_API_RPC_URL,getAnalyticsUrl:()=>a.bq.PULSE_API_URL,getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),parseError:e=>"string"==typeof e?e:"string"==typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error",sortRequestedNetworks(e,t=[]){let i={};return t&&e&&(e.forEach((e,t)=>{i[e]=t}),t.sort((e,t)=>{let r=i[e.id],o=i[t.id];return void 0!==r&&void 0!==o?r-o:void 0!==r?-1:void 0!==o?1:0})),t},calculateBalance(e){let t=0;for(let i of e)t+=i.value??0;return t},formatTokenBalance(e){let t=e.toFixed(2),[i,r]=t.split(".");return{dollars:i,pennies:r}},isAddress:e=>!!(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)&&(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e))),uniqueBy(e,t){let i=new Set;return e.filter(e=>{let r=e[t];return!i.has(r)&&(i.add(r),!0)})}};async function u(...e){let t=await fetch(...e);if(!t.ok){let e=Error(`HTTP status code: ${t.status}`,{cause:t});throw e}return t}class d{constructor({baseUrl:e,clientId:t}){this.baseUrl=e,this.clientId=t}async get({headers:e,signal:t,cache:i,...r}){let o=this.createUrl(r),a=await u(o,{method:"GET",headers:e,signal:t,cache:i});return a.json()}async getBlob({headers:e,signal:t,...i}){let r=this.createUrl(i),o=await u(r,{method:"GET",headers:e,signal:t});return o.blob()}async post({body:e,headers:t,signal:i,...r}){let o=this.createUrl(r),a=await u(o,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0,signal:i});return a.json()}async put({body:e,headers:t,signal:i,...r}){let o=this.createUrl(r),a=await u(o,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0,signal:i});return a.json()}async delete({body:e,headers:t,signal:i,...r}){let o=this.createUrl(r),a=await u(o,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0,signal:i});return a.json()}createUrl({path:e,params:t}){let i=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&i.searchParams.append(e,t)}),this.clientId&&i.searchParams.append("clientId",this.clientId),i}}let p="WALLETCONNECT_DEEPLINK_CHOICE",h="@w3m/recent",g="@w3m/connected_wallet_image_url",w="@w3m/connected_connector",f="@w3m/connected_social",m={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(p,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(p);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(p)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{let t=m.getRecentWallets(),i=t.find(t=>t.id===e.id);i||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(h,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let e=localStorage.getItem(h);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(g,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},removeConnectedWalletImageUrl(){try{localStorage.removeItem(g)}catch{console.info("Unable to remove Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(g)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(e){try{localStorage.setItem(w,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(w)}catch{console.info("Unable to get Connected Connector")}},setConnectedSocialProvider(e){try{localStorage.setItem(f,e)}catch{console.info("Unable to set Connected Social Provider")}},getConnectedSocialProvider(){try{return localStorage.getItem(f)}catch{console.info("Unable to get Connected Social Provider")}},getConnectedSocialUsername(){try{return localStorage.getItem("@w3m-storage/SOCIAL_USERNAME")}catch{console.info("Unable to get Connected Social Username")}}},v=(0,o.sj)({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),b={state:v,subscribeNetworkImages:e=>(0,o.Ld)(v.networkImages,()=>e(v.networkImages)),subscribeKey:(e,t)=>(0,r.VW)(v,e,t),subscribe:e=>(0,o.Ld)(v,()=>e(v)),setWalletImage(e,t){v.walletImages[e]=t},setNetworkImage(e,t){v.networkImages[e]=t},setChainImage(e,t){v.chainImages[e]=t},setConnectorImage(e,t){v.connectorImages[e]=t},setTokenImage(e,t){v.tokenImages[e]=t},setCurrencyImage(e,t){v.currencyImages[e]=t}},y=(0,o.sj)({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),x={state:y,subscribe:e=>(0,o.Ld)(y,()=>e(y)),setThemeMode(e){y.themeMode=e;try{let t=k.getAuthConnector();if(t){let i=x.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:i,w3mThemeVariables:(0,a.tU)(i,e)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(e){y.themeVariables={...y.themeVariables,...e};try{let e=k.getAuthConnector();if(e){let t=x.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:t,w3mThemeVariables:(0,a.tU)(y.themeVariables,y.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot:()=>(0,o.CO)(y)},C=(0,o.sj)({connectors:[]}),k={state:C,subscribeKey:(e,t)=>(0,r.VW)(C,e,t),setConnectors(e,t){t?(C.connectors=[...C.connectors,...e.map(e=>(0,o.iH)(e))],C.connectors=this.mergeMultiChainConnectors(C.connectors)):C.connectors=e.map(e=>(0,o.iH)(e))},mergeMultiChainConnectors(e){let t=[];return e.forEach(e=>{let{name:i,chain:r,type:o}=e,a=t.findIndex(e=>e.name===i);if(-1===a)t.push({...e});else{let i=t[a];i&&(i?.chain===r||i.type===o?t.push({...e}):"MULTI_CHAIN"===i.type?t.push({...e}):t[a]={...i,type:"MULTI_CHAIN",providers:[i,e]})}}),t},addConnector(e){if(C.connectors.push((0,o.iH)(e)),"w3mAuth"===e.id){let t=(0,o.CO)(W.state),i=x.getSnapshot().themeMode,r=x.getSnapshot().themeVariables;e?.provider?.syncDappData?.({metadata:t.metadata,sdkVersion:t.sdkVersion,projectId:t.projectId}),e.provider.syncTheme({themeMode:i,themeVariables:r,w3mThemeVariables:(0,a.tU)(r,i)})}},getAuthConnector:()=>C.connectors.find(e=>"AUTH"===e.type),getAnnouncedConnectorRdns:()=>C.connectors.filter(e=>"ANNOUNCED"===e.type).map(e=>e.info?.rdns),getConnectors:()=>C.connectors,getConnector:(e,t)=>C.connectors.find(i=>i.explorerId===e||i.info?.rdns===t)},T=(0,o.sj)({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0}),S={state:T,subscribe:e=>(0,o.Ld)(T,()=>e(T)),set(e){Object.assign(T,{...T,...e})}},A=c.getAnalyticsUrl(),_=new d({baseUrl:A,clientId:null}),E=["MODAL_CREATED"],$=(0,o.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),R={state:$,subscribe:e=>(0,o.Ld)($,()=>e($)),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:i}=W.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":i}},async _sendAnalyticsEvent(e){try{if(E.includes(e.data.event)||"undefined"==typeof window)return;await _.post({path:"/e",headers:R._getApiHeaders(),body:{eventId:c.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){$.timestamp=Date.now(),$.data=e,W.state.enableAnalytics&&R._sendAnalyticsEvent($)}},P={isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]},N={supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]},I=(0,o.sj)({multiChainEnabled:!1,chains:(0,r.Yr)(),activeChain:void 0,activeCaipNetwork:void 0}),O={state:I,subscribeKey:(e,t)=>(0,r.VW)(I,e,t),subscribeChain(e){let t;let i=I.activeChain;return i?(0,o.Ld)(I.chains,()=>{let r=I.chains.get(i);t&&t===r||(t=r,e(r))}):()=>{}},subscribeChainProp(e,t){let i;let r=I.activeChain;return r?(0,o.Ld)(I.chains,()=>{let o=I.chains.get(r)?.[e];i!==o&&(i=o,t(o))}):()=>{}},initialize(e){let t=e?.[0]?.chain;if(!t)throw Error("Chain is required to initialize ChainController");I.activeChain=t,e.forEach(e=>{I.chains.set(e.chain,{chain:e.chain,connectionControllerClient:e.connectionControllerClient,networkControllerClient:e.networkControllerClient,accountState:P,networkState:N})})},setMultiChainEnabled(e){I.multiChainEnabled=e},setChainNetworkData(e,t){if(!e)throw Error("Chain is required to update chain network data");let i=I.chains.get(e);i&&(i.networkState={...i.networkState,...t},I.chains.set(e,i),j.replaceState(i.networkState))},setChainAccountData(e,t){if(!e)throw Error("Chain is required to update chain account data");let i=I.chains.get(e);i&&(i.accountState={...i.accountState,...t},I.chains.set(e,i),el.replaceState(i.accountState))},setAccountProp(e,t,i){this.setChainAccountData(I.multiChainEnabled?i:I.activeChain,{[e]:t})},setActiveChain(e){let t=e?I.chains.get(e):void 0;t&&(I.activeChain=t.chain,I.activeCaipNetwork=I.chains.get(t.chain)?.networkState?.requestedCaipNetworks?.[0],S.set({activeChain:e}))},setActiveConnector(e){e&&(I.activeConnector=(0,o.iH)(e))},getNetworkControllerClient(){let e=I.activeChain;if(!e)throw Error("Chain is required to get network controller client");let t=I.chains.get(e);if(!t)throw Error("Chain adapter not found");if(!t.networkControllerClient)throw Error("NetworkController client not set");return t.networkControllerClient},getConnectionControllerClient(){let e=I.activeChain;if(!e)throw Error("Chain is required to get connection controller client");let t=I.chains.get(e);if(!t)throw Error("Chain adapter not found");if(!t.connectionControllerClient)throw Error("ConnectionController client not set");return t.connectionControllerClient},getAccountProp(e){let t=(I.multiChainEnabled,I.activeChain);if(!t)return;let i=I.chains.get(t)?.accountState;if(i)return i[e]},getNetworkProp(e){let t=(I.multiChainEnabled,I.activeChain);if(!t)return;let i=I.chains.get(t)?.networkState;if(i)return i[e]},resetAccount(e){let t=I.multiChainEnabled?e:I.activeChain;if(!t)throw Error("Chain is required to set account prop");this.setChainAccountData(t,{isConnected:!1,smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountType:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0})}},D=(0,o.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),j={state:D,replaceState(e){Object.assign(D,e)},subscribeKey(e,t){let i;return O.subscribeChainProp("networkState",r=>{if(r){let o=r[e];i!==o&&(i=o,t(o))}})},_getClient:()=>O.getNetworkControllerClient(),initializeDefaultNetwork(){let e=this.getRequestedCaipNetworks();e.length>0&&this.setCaipNetwork(e[0])},setCaipNetwork(e){let t=O.state.multiChainEnabled?e?.chain:O.state.activeChain;if(!t)throw Error("chain is required to set active network");if(!e)throw Error("caipNetwork is required to set active network");if(O.state.activeCaipNetwork=e,O.state.activeChain=t,O.setChainNetworkData(t,{caipNetwork:e}),S.set({activeChain:t,selectedNetworkId:e?.id}),!O.state.chains.get(t)?.networkState?.allowUnsupportedChain){let e=this.checkIfSupportedNetwork();e||this.showUnsupportedChainUI()}},setDefaultCaipNetwork(e,t){let i=O.state.multiChainEnabled?t:O.state.activeChain;if(!i)throw Error("chain is required to set default network");O.state.activeCaipNetwork=e,O.state.activeChain=i,O.setChainNetworkData(i,{caipNetwork:e,isDefaultCaipNetwork:!0}),S.set({selectedNetworkId:e?.id,activeChain:t})},setRequestedCaipNetworks(e,t){O.setChainNetworkData(O.state.multiChainEnabled?t:O.state.activeChain,{requestedCaipNetworks:e})},setAllowUnsupportedChain(e,t){O.setChainNetworkData(t||O.state.activeChain,{allowUnsupportedChain:e})},setSmartAccountEnabledNetworks(e,t){O.setChainNetworkData(O.state.multiChainEnabled?t:O.state.activeChain,{smartAccountEnabledNetworks:e})},getRequestedCaipNetworks(e){let t;if(!O.state.activeChain)throw Error("activeChain is required to get requested networks");if(e){let i=O.state.multiChainEnabled?e:O.state.activeChain;if(!i)throw Error("chain is required to get requested networks");t=[i]}else{let e=O.state.multiChainEnabled?[...O.state.chains.keys()]:[O.state.activeChain];t=e}let i=[],r=[];t.forEach(e=>{O.state.chains.get(e)?.networkState?.approvedCaipNetworkIds&&i.push(...O.state.chains.get(e)?.networkState?.approvedCaipNetworkIds||[]),O.state.chains.get(e)?.networkState?.requestedCaipNetworks&&r.push(...O.state.chains.get(e)?.networkState?.requestedCaipNetworks||[])});let o=c.sortRequestedNetworks(i,r);return o},async switchActiveNetwork(e){let t=O.getNetworkControllerClient();await t.switchCaipNetwork(e);let i=O.state.multiChainEnabled?e?.chain:O.state.activeChain;if(!i)throw Error("chain is required to switch active network");if(!e)throw Error("network is required to switch active network");O.state.activeCaipNetwork=e,O.state.activeChain=i,O.setChainNetworkData(i,{caipNetwork:e}),S.set({activeChain:i,selectedNetworkId:e.id}),e&&R.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.id}})},getApprovedCaipNetworkIds(e){if(e){let t=O.state.multiChainEnabled?e:O.state.activeChain;if(!t)throw Error("chain is required to get approved network IDs");return O.state.chains.get(t)?.networkState?.approvedCaipNetworkIds}let t=[];return Object.values(O.state.chains).forEach(e=>{e.networkState.approvedCaipNetworkIds&&t.push(...e.networkState?.approvedCaipNetworkIds||[])}),t},async setApprovedCaipNetworksData(e){let t=O.getNetworkControllerClient(),i=await t.getApprovedCaipNetworksData(),r=O.state.multiChainEnabled?e:O.state.activeChain;if(!r)throw Error("chain is required to set approved network data");O.setChainNetworkData(r,{approvedCaipNetworkIds:i?.approvedCaipNetworkIds,supportsAllNetworks:i?.supportsAllNetworks||!1})},checkIfSupportedNetwork(){let e=O.state.activeChain;if(!e)return!1;let t=O.state.chains.get(e)?.networkState?.caipNetwork,i=this.getRequestedCaipNetworks();return i?.some(e=>e.id===t?.id)},checkIfSmartAccountEnabled(){let e=a.p1.caipNetworkIdToNumber(O.state.activeCaipNetwork?.id),t=O.state.activeChain;if(!t)throw Error("activeChain is required to check if smart account is enabled");if(!e)return!1;let i=O.state.chains.get(t)?.networkState?.smartAccountEnabledNetworks||[];return!!i?.includes(e)},resetNetwork(){let e=O.state.activeChain;if(!e)throw Error("chain is required to reset network");O.state.chains.get(e)?.networkState?.isDefaultCaipNetwork||O.setChainNetworkData(e,{caipNetwork:void 0}),O.setChainNetworkData(e,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},getSupportsAllNetworks(){let e=(O.state.multiChainEnabled,O.state.activeChain);if(!e)throw Error("chain is required to check if network supports all networks");return O.state.chains.get(e)?.networkState?.supportsAllNetworks},showUnsupportedChainUI(){setTimeout(()=>{eu.open({view:"UnsupportedChain"})},300)}},U=c.getApiUrl(),B=new d({baseUrl:U,clientId:null}),M=(0,o.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1,excludedRDNS:[]}),L={state:M,subscribeKey:(e,t)=>(0,r.VW)(M,e,t),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:i}=W.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":i}},_filterOutExtensions:e=>W.state.isUniversalProvider?e.filter(e=>!!(e.mobile_link||e.desktop_link||e.webapp_link)):e,async _fetchWalletImage(e){let t=`${B.baseUrl}/getWalletImage/${e}`,i=await B.getBlob({path:t,headers:L._getApiHeaders()});b.setWalletImage(e,URL.createObjectURL(i))},async _fetchNetworkImage(e){let t=`${B.baseUrl}/public/getAssetImage/${e}`,i=await B.getBlob({path:t,headers:L._getApiHeaders()});b.setNetworkImage(e,URL.createObjectURL(i))},async _fetchConnectorImage(e){let t=`${B.baseUrl}/public/getAssetImage/${e}`,i=await B.getBlob({path:t,headers:L._getApiHeaders()});b.setConnectorImage(e,URL.createObjectURL(i))},async _fetchCurrencyImage(e){let t=`${B.baseUrl}/public/getCurrencyImage/${e}`,i=await B.getBlob({path:t,headers:L._getApiHeaders()});b.setCurrencyImage(e,URL.createObjectURL(i))},async _fetchTokenImage(e){let t=`${B.baseUrl}/public/getTokenImage/${e}`,i=await B.getBlob({path:t,headers:L._getApiHeaders()});b.setTokenImage(e,URL.createObjectURL(i))},async fetchNetworkImages(){let e=j.getRequestedCaipNetworks(),t=e?.map(({imageId:e})=>e).filter(Boolean);t&&await Promise.allSettled(t.map(e=>L._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=k.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>L._fetchConnectorImage(e)))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map(e=>L._fetchCurrencyImage(e)))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map(e=>L._fetchTokenImage(e)))},async fetchFeaturedWallets(){let{featuredWalletIds:e}=W.state;if(e?.length){let{data:t}=await B.get({path:"/getWallets",headers:L._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort((t,i)=>e.indexOf(t.id)-e.indexOf(i.id));let i=t.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(i.map(e=>L._fetchWalletImage(e))),M.featured=t}},async fetchRecommendedWallets(){let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:i}=W.state,r=[...t??[],...i??[]].filter(Boolean),{data:o,count:a}=await B.get({path:"/getWallets",headers:L._getApiHeaders(),params:{page:"1",chains:j.state.caipNetwork?.id,entries:"4",include:e?.join(","),exclude:r?.join(",")}}),n=m.getRecentWallets(),s=o.map(e=>e.image_id).filter(Boolean),l=n.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s,...l].map(e=>L._fetchWalletImage(e))),M.recommended=o,M.count=a??0},async fetchWallets({page:e}){let{includeWalletIds:t,excludeWalletIds:i,featuredWalletIds:r}=W.state,o=[...M.recommended.map(({id:e})=>e),...i??[],...r??[]].filter(Boolean),{data:a,count:n}=await B.get({path:"/getWallets",headers:L._getApiHeaders(),params:{page:String(e),entries:"40",chains:j.state.caipNetwork?.id,include:t?.join(","),exclude:o.join(",")}}),s=a.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s.map(e=>L._fetchWalletImage(e)),c.wait(300)]),M.wallets=c.uniqueBy([...M.wallets,...L._filterOutExtensions(a)],"id"),M.count=n>M.count?n:M.count,M.page=e},async searchWalletByIds({ids:e}){let{data:t}=await B.get({path:"/getWallets",headers:L._getApiHeaders(),params:{page:"1",entries:String(e.length),chains:j.state.caipNetwork?.id,include:e?.join(",")}});t&&t.forEach(e=>{e?.rdns&&M.excludedRDNS.push(e.rdns)})},async searchWallet({search:e}){let{includeWalletIds:t,excludeWalletIds:i}=W.state;M.search=[];let{data:r}=await B.get({path:"/getWallets",headers:L._getApiHeaders(),params:{page:"1",entries:"100",search:e?.trim(),chains:j.state.caipNetwork?.id,include:t?.join(","),exclude:i?.join(",")}}),o=r.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...o.map(e=>L._fetchWalletImage(e)),c.wait(300)]),M.search=L._filterOutExtensions(r)},async reFetchWallets(){M.page=1,M.wallets=[],await L.fetchFeaturedWallets(),await L.fetchRecommendedWallets()},prefetch(){let e=[L.fetchFeaturedWallets(),L.fetchRecommendedWallets(),L.fetchNetworkImages(),L.fetchConnectorImages()];void 0===W.state.enableAnalytics&&e.push(L.fetchAnalyticsConfig()),M.prefetchPromise=Promise.race([Promise.allSettled(e),c.wait(3e3)])},async fetchAnalyticsConfig(){let{isAnalyticsEnabled:e}=await B.get({path:"/getAnalyticsConfig",headers:L._getApiHeaders()});W.setEnableAnalytics(e)}},z=(0,o.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),W={state:z,subscribeKey:(e,t)=>(0,r.VW)(z,e,t),setProjectId(e){z.projectId=e},setAllWallets(e){z.allWallets=e},setIncludeWalletIds(e){z.includeWalletIds=e},setExcludeWalletIds(e){z.excludeWalletIds=e,e&&L.searchWalletByIds({ids:e})},setFeaturedWalletIds(e){z.featuredWalletIds=e},setTokens(e){z.tokens=e},setTermsConditionsUrl(e){z.termsConditionsUrl=e},setPrivacyPolicyUrl(e){z.privacyPolicyUrl=e},setCustomWallets(e){z.customWallets=e},setIsSiweEnabled(e){z.isSiweEnabled=e},setIsUniversalProvider(e){z.isUniversalProvider=e},setEnableAnalytics(e){z.enableAnalytics=e},setSdkVersion(e){z.sdkVersion=e},setMetadata(e){z.metadata=e},setOnrampEnabled(e){z.enableOnramp=e},setDisableAppend(e){z.disableAppend=e},setEIP6963Enabled(e){z.enableEIP6963=e},setHasMultipleAddresses(e){z.hasMultipleAddresses=e},setEnableSwaps(e){z.enableSwaps=e}},Z={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},H=c.getBlockchainApiUrl(),V=(0,o.sj)({clientId:null,api:new d({baseUrl:H,clientId:null})}),F={state:V,fetchIdentity:({address:e})=>V.api.get({path:`/v1/identity/${e}`,params:{projectId:W.state.projectId}}),fetchTransactions:({account:e,projectId:t,cursor:i,onramp:r,signal:o,cache:a})=>V.api.get({path:`/v1/account/${e}/history?projectId=${t}${r?`&onramp=${r}`:""}`,params:i?{cursor:i}:{},signal:o,cache:a}),fetchSwapQuote:({projectId:e,amount:t,userAddress:i,from:r,to:o,gasPrice:a})=>V.api.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{projectId:e,amount:t,userAddress:i,from:r,to:o,gasPrice:a}}),fetchSwapTokens:({projectId:e,chainId:t})=>V.api.get({path:`/v1/convert/tokens?projectId=${e}&chainId=${t}`}),fetchTokenPrice:({projectId:e,addresses:t})=>V.api.post({path:"/v1/fungible/price",body:{projectId:e,currency:"usd",addresses:t},headers:{"Content-Type":"application/json"}}),fetchSwapAllowance({projectId:e,tokenAddress:t,userAddress:i}){let{sdkType:r,sdkVersion:o}=W.state;return V.api.get({path:`/v1/convert/allowance?projectId=${e}&tokenAddress=${t}&userAddress=${i}`,headers:{"Content-Type":"application/json","x-sdk-type":r,"x-sdk-version":o}})},fetchGasPrice({projectId:e,chainId:t}){let{sdkType:i,sdkVersion:r}=W.state;return V.api.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json","x-sdk-type":i,"x-sdk-version":r},params:{projectId:e,chainId:t}})},generateSwapCalldata:({amount:e,from:t,projectId:i,to:r,userAddress:o})=>V.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:e,eip155:{slippage:l.CONVERT_SLIPPAGE_TOLERANCE},from:t,projectId:i,to:r,userAddress:o}}),generateApproveCalldata({from:e,projectId:t,to:i,userAddress:r}){let{sdkType:o,sdkVersion:a}=W.state;return V.api.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json","x-sdk-type":o,"x-sdk-version":a},params:{projectId:t,userAddress:r,from:e,to:i}})},async getBalance(e,t,i){let{sdkType:r,sdkVersion:o}=W.state;return V.api.get({path:`/v1/account/${e}/balance`,headers:{"x-sdk-type":r,"x-sdk-version":o},params:{currency:"usd",projectId:W.state.projectId,chainId:t,forceUpdate:i}})},lookupEnsName:async e=>V.api.get({path:`/v1/profile/account/${e}${a.bq.WC_NAME_SUFFIX}?projectId=${W.state.projectId}`}),reverseLookupEnsName:async({address:e})=>V.api.get({path:`/v1/profile/reverse/${e}?projectId=${W.state.projectId}`}),getEnsNameSuggestions:async e=>V.api.get({path:`/v1/profile/suggestions/${e}?projectId=${W.state.projectId}`}),registerEnsName:async({coinType:e,address:t,message:i,signature:r})=>V.api.post({path:"/v1/profile/account",body:{coin_type:e,address:t,message:i,signature:r},headers:{"Content-Type":"application/json"}}),async generateOnRampURL({destinationWallets:e,partnerUserId:t,defaultNetwork:i,purchaseAmount:r,paymentAmount:o}){let a=await V.api.post({path:`/v1/generators/onrampurl?projectId=${W.state.projectId}`,body:{destinationWallets:e,defaultNetwork:i,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:r,presetFiatAmount:o}});return a.url},async getOnrampOptions(){try{let e=await V.api.get({path:`/v1/onramp/options?projectId=${W.state.projectId}`});return e}catch(e){return Z}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:i,network:r}){try{let o=await V.api.post({path:`/v1/onramp/quote?projectId=${W.state.projectId}`,body:{purchaseCurrency:e,paymentCurrency:t,amount:i,network:r}});return o}catch(e){return{coinbaseFee:{amount:i,currency:t.id},networkFee:{amount:i,currency:t.id},paymentSubtotal:{amount:i,currency:t.id},paymentTotal:{amount:i,currency:t.id},purchaseAmount:{amount:i,currency:t.id},quoteId:"mocked-quote-id"}}},setClientId(e){V.clientId=e,V.api=new d({baseUrl:H,clientId:e})}},Y=(0,o.sj)({message:"",variant:"success",open:!1}),K={state:Y,subscribeKey:(e,t)=>(0,r.VW)(Y,e,t),showLoading(e){Y.message=e,Y.variant="loading",Y.open=!0},showSuccess(e){Y.message=e,Y.variant="success",Y.open=!0},showError(e){let t=c.parseError(e);Y.message=t,Y.variant="error",Y.open=!0},hide(){Y.open=!1}};var q=i(69043);let G=(0,o.sj)({transactions:[],coinbaseTransactions:{},transactionsByYear:{},loading:!1,empty:!1,next:void 0}),X={state:G,subscribe:e=>(0,o.Ld)(G,()=>e(G)),async fetchTransactions(e,t){let{projectId:i}=W.state;if(!i||!e)throw Error("Transactions can't be fetched without a projectId and an accountAddress");G.loading=!0;try{let r=await F.fetchTransactions({account:e,projectId:i,cursor:G.next,onramp:t,cache:"coinbase"===t?"no-cache":void 0}),o=this.filterSpamTransactions(r.data),a=[...G.transactions,...o];G.loading=!1,"coinbase"===t?G.coinbaseTransactions=this.groupTransactionsByYearAndMonth(G.coinbaseTransactions,r.data):(G.transactions=a,G.transactionsByYear=this.groupTransactionsByYearAndMonth(G.transactionsByYear,o)),G.empty=0===a.length,G.next=r.next?r.next:void 0}catch(t){R.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:i,cursor:G.next,isSmartAccount:el.state.preferredAccountType===q.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),K.showError("Failed to fetch transactions"),G.loading=!1,G.empty=!0,G.next=void 0}},groupTransactionsByYearAndMonth(e={},t=[]){let i=e;return t.forEach(e=>{let t=new Date(e.metadata.minedAt).getFullYear(),r=new Date(e.metadata.minedAt).getMonth(),o=i[t]??{},a=o[r]??[],n=a.filter(t=>t.id!==e.id);i[t]={...o,[r]:[...n,e].sort((e,t)=>new Date(t.metadata.minedAt).getTime()-new Date(e.metadata.minedAt).getTime())}}),i},filterSpamTransactions:e=>e.filter(e=>{let t=e.transfers.every(e=>!0===e.nft_info?.flags.is_spam);return!t}),clearCursor(){G.next=void 0},resetTransactions(){G.transactions=[],G.transactionsByYear={},G.loading=!1,G.empty=!1,G.next=void 0}},Q=(0,o.sj)({wcError:!1,buffering:!1}),J={state:Q,subscribeKey:(e,t)=>(0,r.VW)(Q,e,t),_getClient:()=>O.getConnectionControllerClient(),setClient(e){Q._client=(0,o.iH)(e)},async connectWalletConnect(){m.setConnectedConnector("WALLET_CONNECT"),await this._getClient().connectWalletConnect(e=>{Q.wcUri=e,Q.wcPairingExpiry=c.getPairingExpiry()})},async connectExternal(e,t){await this._getClient().connectExternal?.(e),O.setActiveChain(t),m.setConnectedConnector(e.type)},async reconnectExternal(e){await this._getClient().reconnectExternal?.(e),m.setConnectedConnector(e.type)},async setPreferredAccountType(e){eu.setLoading(!0);let t=k.getAuthConnector();t&&(await t?.provider.setPreferredAccount(e),await this.reconnectExternal(t),eu.setLoading(!1),R.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:e,network:j.state.caipNetwork?.id||""}}))},async signMessage(e){return this._getClient().signMessage(e)},parseUnits(e,t){return this._getClient().parseUnits(e,t)},formatUnits(e,t){return this._getClient().formatUnits(e,t)},async sendTransaction(e){return this._getClient().sendTransaction(e)},async estimateGas(e){return this._getClient().estimateGas(e)},async writeContract(e){return this._getClient().writeContract(e)},async getEnsAddress(e){return this._getClient().getEnsAddress(e)},async getEnsAvatar(e){return this._getClient().getEnsAvatar(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){Q.wcUri=void 0,Q.wcPairingExpiry=void 0,Q.wcLinking=void 0,Q.recentWallet=void 0,X.resetTransactions(),m.deleteWalletConnectDeepLink()},setWcLinking(e){Q.wcLinking=e},setWcError(e){Q.wcError=e,Q.buffering=!1},setRecentWallet(e){Q.recentWallet=e},setBuffering(e){Q.buffering=e},async disconnect(){let e=this._getClient();try{await e.disconnect(),m.removeConnectedWalletImageUrl(),this.resetWcConnection()}catch(e){throw Error("Failed to disconnect")}}},ee={async getTokenList(){let e=j.state.caipNetwork,t=await F.fetchSwapTokens({chainId:e?.id,projectId:W.state.projectId}),i=t?.tokens?.map(e=>({...e,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0}))||[];return i},async fetchGasPrice(){let e=W.state.projectId,t=j.state.caipNetwork;return t?await F.fetchGasPrice({projectId:e,chainId:t.id}):null},async fetchSwapAllowance({tokenAddress:e,userAddress:t,sourceTokenAmount:i,sourceTokenDecimals:r}){let o=W.state.projectId,a=await F.fetchSwapAllowance({projectId:o,tokenAddress:e,userAddress:t});if(a?.allowance&&i&&r){let e=J.parseUnits(i,r),t=BigInt(a.allowance)>=e;return t}return!1},async getMyTokensWithBalance(e){let t=el.state.address,i=j.state.caipNetwork;if(!t||!i)return[];let r=await F.getBalance(t,i.id,e),o=r.balances.filter(e=>"0"!==e.quantity.decimals);return el.setTokenBalance(o),this.mapBalancesToSwapTokens(o)},mapBalancesToSwapTokens:e=>e?.map(e=>({...e,address:e?.address?e.address:`${e.chainId}:${l.NATIVE_TOKEN_ADDRESS}`,decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1}))||[]},et=(0,o.sj)({view:"Connect",history:["Connect"],transactionStack:[]}),ei={state:et,subscribeKey:(e,t)=>(0,r.VW)(et,e,t),pushTransactionStack(e){et.transactionStack.push(e)},popTransactionStack(e){let t=et.transactionStack.pop();t&&(e?(this.goBack(),t?.onCancel?.()):(t.goBack?this.goBack():t.view&&this.reset(t.view),t?.onSuccess?.()))},push(e,t){e!==et.view&&(et.view=e,et.history.push(e),et.data=t)},reset(e){et.view=e,et.history=[e]},replace(e,t){et.history.length>=1&&et.history.at(-1)!==e&&(et.view=e,et.history[et.history.length-1]=e,et.data=t)},goBack(){if(et.history.length>1){et.history.pop();let[e]=et.history.slice(-1);e&&(et.view=e)}},goBackToIndex(e){if(et.history.length>1){et.history=et.history.slice(0,e+1);let[t]=et.history.slice(-1);t&&(et.view=t)}}},er={getGasPriceInEther(e,t){let i=Number(t*e)/1e18;return i},getGasPriceInUSD(e,t,i){let r=er.getGasPriceInEther(t,i),o=a.C6.bigNumber(e),n=o.multipliedBy(r);return n.toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:i,toTokenAmount:r}){let o=a.C6.bigNumber(e).multipliedBy(t),n=a.C6.bigNumber(r).multipliedBy(i),s=o.minus(n).dividedBy(o).multipliedBy(100);return s.toNumber()},getMaxSlippage(e,t){let i=a.C6.bigNumber(e).dividedBy(100),r=a.C6.multiply(t,i);return r.toNumber()},getProviderFee(e,t=.0085){let i=a.C6.bigNumber(e).multipliedBy(t);return i.toString()},isInsufficientNetworkTokenForGas:(e,t)=>!!a.C6.bigNumber(e).isZero()||a.C6.bigNumber(a.C6.bigNumber(t||"0")).isGreaterThan(e),isInsufficientSourceTokenForSwap(e,t,i){let r=i?.find(e=>e.address===t)?.quantity?.numeric,o=a.C6.bigNumber(r||"0").isLessThan(e);return o},getToTokenAmount({sourceToken:e,toToken:t,sourceTokenPrice:i,toTokenPrice:r,sourceTokenAmount:o}){if("0"===o||!e||!t)return"0";let n=e.decimals,s=t.decimals;if(r<=0)return"0";let l=a.C6.bigNumber(o).multipliedBy(.0085),c=a.C6.bigNumber(o).minus(l),u=c.multipliedBy(a.C6.bigNumber(10).pow(n)),d=a.C6.bigNumber(i).dividedBy(r),p=u.multipliedBy(d).dividedBy(a.C6.bigNumber(10).pow(n-s)),h=p.dividedBy(a.C6.bigNumber(10).pow(s)),g=h.toFixed(s).toString();return g}},eo={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:l.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},ea=(0,o.sj)(eo),en={state:ea,subscribe:e=>(0,o.Ld)(ea,()=>e(ea)),subscribeKey:(e,t)=>(0,r.VW)(ea,e,t),getParams(){let e=j.state.caipNetwork,t=el.state.address,i=`${e?.id}:${l.NATIVE_TOKEN_ADDRESS}`,r=m.getConnectedConnector(),o=k.getAuthConnector();if(!t)throw Error("No address found to swap the tokens from.");let n=el.state.caipAddress,s=!ea.toToken?.address||!ea.toToken?.decimals,c=!ea.sourceToken?.address||!ea.sourceToken?.decimals||!a.C6.bigNumber(ea.sourceTokenAmount).isGreaterThan(0),u=!ea.sourceTokenAmount;return{networkAddress:i,fromAddress:t,fromCaipAddress:el.state.caipAddress,sourceTokenAddress:ea.sourceToken?.address,toTokenAddress:ea.toToken?.address,toTokenAmount:ea.toTokenAmount,toTokenDecimals:ea.toToken?.decimals,sourceTokenAmount:ea.sourceTokenAmount,sourceTokenDecimals:ea.sourceToken?.decimals,invalidToToken:s,invalidSourceToken:c,invalidSourceTokenAmount:u,availableToSwap:n&&!s&&!c&&!u,isAuthConnector:o?.walletFeatures&&"AUTH"===r}},setSourceToken(e){if(!e){ea.sourceToken=e,ea.sourceTokenAmount="",ea.sourceTokenPriceInUSD=0;return}ea.sourceToken=e,this.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){ea.sourceTokenAmount=e},setToToken(e){if(!e){ea.toToken=e,ea.toTokenAmount="",ea.toTokenPriceInUSD=0;return}ea.toToken=e,this.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){ea.toTokenAmount=e?a.C6.formatNumberToLocalString(e,6):""},async setTokenPrice(e,t){let{availableToSwap:i}=this.getParams(),r=ea.tokensPriceMap[e]||0;r||(ea.loadingPrices=!0,r=await this.getAddressPrice(e)),"sourceToken"===t?ea.sourceTokenPriceInUSD=r:"toToken"===t&&(ea.toTokenPriceInUSD=r),ea.loadingPrices&&(ea.loadingPrices=!1,i&&this.swapTokens())},switchTokens(){if(ea.initializing||!ea.initialized)return;let e=ea.toToken?{...ea.toToken}:void 0,t=ea.sourceToken?{...ea.sourceToken}:void 0,i=e&&""===ea.toTokenAmount?"1":ea.toTokenAmount;this.setSourceToken(e),this.setToToken(t),this.setSourceTokenAmount(i),this.setToTokenAmount(""),this.swapTokens()},resetState(){ea.myTokensWithBalance=eo.myTokensWithBalance,ea.tokensPriceMap=eo.tokensPriceMap,ea.initialized=eo.initialized,ea.sourceToken=eo.sourceToken,ea.sourceTokenAmount=eo.sourceTokenAmount,ea.sourceTokenPriceInUSD=eo.sourceTokenPriceInUSD,ea.toToken=eo.toToken,ea.toTokenAmount=eo.toTokenAmount,ea.toTokenPriceInUSD=eo.toTokenPriceInUSD,ea.networkPrice=eo.networkPrice,ea.networkTokenSymbol=eo.networkTokenSymbol,ea.networkBalanceInUSD=eo.networkBalanceInUSD,ea.inputError=eo.inputError},resetValues(){let{networkAddress:e}=this.getParams(),t=ea.tokens?.find(t=>t.address===e);this.setSourceToken(t),this.setToToken(void 0)},getApprovalLoadingState:()=>ea.loadingApprovalTransaction,clearError(){ea.transactionError=void 0},async initializeState(){if(!ea.initializing){if(ea.initializing=!0,!ea.initialized)try{await this.fetchTokens(),ea.initialized=!0}catch(e){ea.initialized=!1,K.showError("Failed to initialize swap"),ei.goBack()}ea.initializing=!1}},async fetchTokens(){let{networkAddress:e}=this.getParams();await this.getTokenList(),await this.getNetworkTokenPrice(),await this.getMyTokensWithBalance();let t=ea.tokens?.find(t=>t.address===e);t&&(ea.networkTokenSymbol=t.symbol,this.setSourceToken(t),this.setSourceTokenAmount("1"))},async getTokenList(){let e=await ee.getTokenList();ea.tokens=e,ea.popularTokens=e.sort((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0),ea.suggestedTokens=e.filter(e=>!!l.SWAP_SUGGESTED_TOKENS.includes(e.symbol),{})},async getAddressPrice(e){let t=ea.tokensPriceMap[e];if(t)return t;let i=await F.fetchTokenPrice({projectId:W.state.projectId,addresses:[e]}),r=i.fungibles||[],o=[...ea.tokens||[],...ea.myTokensWithBalance||[]],a=o?.find(t=>t.address===e)?.symbol,n=r.find(e=>e.symbol.toLowerCase()===a?.toLowerCase())?.price||0,s=parseFloat(n.toString());return ea.tokensPriceMap[e]=s,s},async getNetworkTokenPrice(){let{networkAddress:e}=this.getParams(),t=await F.fetchTokenPrice({projectId:W.state.projectId,addresses:[e]}),i=t.fungibles?.[0],r=i?.price.toString()||"0";ea.tokensPriceMap[e]=parseFloat(r),ea.networkTokenSymbol=i?.symbol||"",ea.networkPrice=r},async getMyTokensWithBalance(e){let t=await ee.getMyTokensWithBalance(e);t&&(await this.getInitialGasPrice(),this.setBalances(t))},setBalances(e){let{networkAddress:t}=this.getParams(),i=j.state.caipNetwork;if(!i)return;let r=e.find(e=>e.address===t);e.forEach(e=>{ea.tokensPriceMap[e.address]=e.price||0}),ea.myTokensWithBalance=e.filter(e=>e.address.startsWith(i.id)),ea.networkBalanceInUSD=r?a.C6.multiply(r.quantity.numeric,r.price).toString():"0"},async getInitialGasPrice(){let e=await ee.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUsd:null};let t=e.standard,i=BigInt(t),r=BigInt(15e4),o=er.getGasPriceInUSD(ea.networkPrice,r,i);return ea.gasFee=t,ea.gasPriceInUSD=o,{gasPrice:i,gasPriceInUSD:ea.gasPriceInUSD}},async swapTokens(){let e=el.state.address,t=ea.sourceToken,i=ea.toToken,r=a.C6.bigNumber(ea.sourceTokenAmount).isGreaterThan(0);if(!i||!t||ea.loadingPrices||!r)return;ea.loadingQuote=!0;let o=a.C6.bigNumber(ea.sourceTokenAmount).multipliedBy(10**t.decimals),n=await F.fetchSwapQuote({userAddress:e,projectId:W.state.projectId,from:t.address,to:i.address,gasPrice:ea.gasFee,amount:o.toString()});ea.loadingQuote=!1;let s=n?.quotes?.[0]?.toAmount;if(!s)return;let l=a.C6.bigNumber(s).dividedBy(10**i.decimals).toString();this.setToTokenAmount(l);let c=this.hasInsufficientToken(ea.sourceTokenAmount,t.address);c?ea.inputError="Insufficient balance":(ea.inputError=void 0,this.setTransactionDetails())},async getTransaction(){let{fromCaipAddress:e,availableToSwap:t}=this.getParams(),i=ea.sourceToken,r=ea.toToken;if(e&&t&&i&&r&&!ea.loadingQuote)try{let t;ea.loadingBuildTransaction=!0;let r=await ee.fetchSwapAllowance({userAddress:e,tokenAddress:i.address,sourceTokenAmount:ea.sourceTokenAmount,sourceTokenDecimals:i.decimals});return t=r?await this.createSwapTransaction():await this.createAllowanceTransaction(),ea.loadingBuildTransaction=!1,ea.fetchError=!1,t}catch(e){ei.goBack(),K.showError("Failed to check allowance"),ea.loadingBuildTransaction=!1,ea.approvalTransaction=void 0,ea.swapTransaction=void 0,ea.fetchError=!0;return}},async createAllowanceTransaction(){let{fromCaipAddress:e,fromAddress:t,sourceTokenAddress:i,toTokenAddress:r}=this.getParams();if(e&&r){if(!i)throw Error("createAllowanceTransaction - No source token address found.");try{let o=await F.generateApproveCalldata({projectId:W.state.projectId,from:i,to:r,userAddress:e}),a=await J.estimateGas({address:t,to:c.getPlainAddress(o.tx.to),data:o.tx.data}),n={data:o.tx.data,to:c.getPlainAddress(o.tx.from),gas:a,gasPrice:BigInt(o.tx.eip155.gasPrice),value:BigInt(o.tx.value),toAmount:ea.toTokenAmount};return ea.swapTransaction=void 0,ea.approvalTransaction=n,n}catch(e){ei.goBack(),K.showError("Failed to create approval transaction"),ea.approvalTransaction=void 0,ea.swapTransaction=void 0,ea.fetchError=!0;return}}},async createSwapTransaction(){let{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:i}=this.getParams(),r=ea.sourceToken,o=ea.toToken;if(!t||!i||!r||!o)return;let a=J.parseUnits(i,r.decimals).toString();try{let i=await F.generateSwapCalldata({projectId:W.state.projectId,userAddress:t,from:r.address,to:o.address,amount:a}),n=r.address===e,s=BigInt(i.tx.eip155.gas),l=BigInt(i.tx.eip155.gasPrice),u={data:i.tx.data,to:c.getPlainAddress(i.tx.to),gas:s,gasPrice:l,value:n?BigInt(a):BigInt("0"),toAmount:ea.toTokenAmount};return ea.gasPriceInUSD=er.getGasPriceInUSD(ea.networkPrice,s,l),ea.approvalTransaction=void 0,ea.swapTransaction=u,u}catch(e){ei.goBack(),K.showError("Failed to create transaction"),ea.approvalTransaction=void 0,ea.swapTransaction=void 0,ea.fetchError=!0;return}},async sendTransactionForApproval(e){let{fromAddress:t,isAuthConnector:i}=this.getParams();ea.loadingApprovalTransaction=!0;let r="Approve limit increase in your wallet";i?ei.pushTransactionStack({view:null,goBack:!0,onSuccess(){K.showLoading(r)}}):K.showLoading(r);try{await J.sendTransaction({address:t,to:e.to,data:e.data,value:BigInt(e.value),gasPrice:BigInt(e.gasPrice)}),await this.swapTokens(),await this.getTransaction(),ea.approvalTransaction=void 0,ea.loadingApprovalTransaction=!1}catch(e){ea.transactionError=e?.shortMessage,ea.loadingApprovalTransaction=!1,K.showError(e?.shortMessage||"Transaction error")}},async sendTransactionForSwap(e){if(!e)return;let{fromAddress:t,toTokenAmount:i,isAuthConnector:r}=this.getParams();ea.loadingTransaction=!0;let o=`Swapping ${ea.sourceToken?.symbol} to ${a.C6.formatNumberToLocalString(i,3)} ${ea.toToken?.symbol}`,n=`Swapped ${ea.sourceToken?.symbol} to ${a.C6.formatNumberToLocalString(i,3)} ${ea.toToken?.symbol}`;r?ei.pushTransactionStack({view:"Account",goBack:!1,onSuccess(){K.showLoading(o),en.resetState()}}):K.showLoading("Confirm transaction in your wallet");try{let i=[ea.sourceToken?.address,ea.toToken?.address].join(","),o=await J.sendTransaction({address:t,to:e.to,data:e.data,gas:e.gas,gasPrice:BigInt(e.gasPrice),value:e.value});return ea.loadingTransaction=!1,K.showSuccess(n),R.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:j.state.caipNetwork?.id||"",swapFromToken:this.state.sourceToken?.symbol||"",swapToToken:this.state.toToken?.symbol||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:el.state.preferredAccountType===q.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),en.resetState(),r||ei.replace("Account"),en.getMyTokensWithBalance(i),o}catch(e){ea.transactionError=e?.shortMessage,ea.loadingTransaction=!1,K.showError(e?.shortMessage||"Transaction error"),R.sendEvent({type:"track",event:"SWAP_ERROR",properties:{network:j.state.caipNetwork?.id||"",swapFromToken:this.state.sourceToken?.symbol||"",swapToToken:this.state.toToken?.symbol||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:el.state.preferredAccountType===q.y_.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken(e,t){let i=er.isInsufficientSourceTokenForSwap(e,t,ea.myTokensWithBalance),r=er.isInsufficientNetworkTokenForGas(ea.networkBalanceInUSD,ea.gasPriceInUSD);return r||i},setTransactionDetails(){let{toTokenAddress:e,toTokenDecimals:t}=this.getParams();e&&t&&(ea.gasPriceInUSD=er.getGasPriceInUSD(ea.networkPrice,BigInt(ea.gasFee),BigInt(15e4)),ea.priceImpact=er.getPriceImpact({sourceTokenAmount:ea.sourceTokenAmount,sourceTokenPriceInUSD:ea.sourceTokenPriceInUSD,toTokenPriceInUSD:ea.toTokenPriceInUSD,toTokenAmount:ea.toTokenAmount}),ea.maxSlippage=er.getMaxSlippage(ea.slippage,ea.toTokenAmount),ea.providerFee=er.getProviderFee(ea.sourceTokenAmount))}},es=(0,o.sj)({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),el={state:es,replaceState(e){Object.assign(es,e)},subscribe:e=>O.subscribeChainProp("accountState",t=>{if(t)return e(t)}),subscribeKey(e,t){let i;return O.subscribeChainProp("accountState",r=>{if(r){let o=r[e];i!==o&&(i=o,t(o))}})},setIsConnected(e,t){O.setAccountProp("isConnected",e,t)},setCaipAddress(e,t){let i=e?c.getPlainAddress(e):void 0;O.setAccountProp("caipAddress",e,t),O.setAccountProp("address",i,t)},setBalance(e,t,i){O.setAccountProp("balance",e,i),O.setAccountProp("balanceSymbol",t,i)},setProfileName(e,t){O.setAccountProp("profileName",e,t)},setProfileImage(e,t){O.setAccountProp("profileImage",e,t)},setAddressExplorerUrl(e,t){O.setAccountProp("addressExplorerUrl",e,t)},setSmartAccountDeployed(e,t){O.setAccountProp("smartAccountDeployed",e,t)},setCurrentTab(e,t){O.setAccountProp("currentTab",e,t)},setTokenBalance(e,t){e&&O.setAccountProp("tokenBalance",e,t)},setShouldUpdateToAddress(e){O.setAccountProp("shouldUpdateToAddress",e)},setAllAccounts(e,t){O.setAccountProp("allAccounts",e,t)},addAddressLabel(e,t){let i=O.getAccountProp("addressLabels")||new Map;i.set(e,t),O.setAccountProp("addressLabels",i)},removeAddressLabel(e){let t=O.getAccountProp("addressLabels")||new Map;t.delete(e),O.setAccountProp("addressLabels",t)},setConnectedWalletInfo(e,t){O.setAccountProp("connectedWalletInfo",e,t)},setPreferredAccountType(e,t){O.setAccountProp("preferredAccountType",e,t)},setSocialProvider(e,t){e&&O.setAccountProp("socialProvider",e,t)},setSocialWindow(e,t){e&&O.setAccountProp("socialWindow",(0,o.iH)(e),t)},setFarcasterUrl(e,t){e&&O.setAccountProp("farcasterUrl",e,t)},async fetchTokenBalance(){let e=j.state.caipNetwork?.id,t=j.state.caipNetwork?.chain,i=el.state.address;try{if(i&&e){let r=await F.getBalance(i,e),o=r.balances.filter(e=>"0"!==e.quantity.decimals);this.setTokenBalance(o,t),en.setBalances(ee.mapBalancesToSwapTokens(r.balances))}}catch(e){K.showError("Failed to fetch token balance")}},resetAccount(e){O.resetAccount(e)}},ec=(0,o.sj)({loading:!1,open:!1}),eu={state:ec,subscribe:e=>(0,o.Ld)(ec,()=>e(ec)),subscribeKey:(e,t)=>(0,r.VW)(ec,e,t),async open(e){await L.state.prefetchPromise;let t=el.state.isConnected;e?.view?ei.reset(e.view):t?ei.reset("Account"):ei.reset("Connect"),ec.open=!0,S.set({open:!0}),R.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:t}})},close(){let e=el.state.isConnected;ec.open=!1,S.set({open:!1}),R.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:e}})},setLoading(e){ec.loading=e,S.set({loading:e})}},ed={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},ep={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},eh=(0,o.sj)({providers:s,selectedProvider:null,error:null,purchaseCurrency:ed,paymentCurrency:ep,purchaseCurrencies:[ed],paymentCurrencies:[],quotesLoading:!1}),eg={state:eh,subscribe:e=>(0,o.Ld)(eh,()=>e(eh)),subscribeKey:(e,t)=>(0,r.VW)(eh,e,t),setSelectedProvider(e){eh.selectedProvider=e},setPurchaseCurrency(e){eh.purchaseCurrency=e},setPaymentCurrency(e){eh.paymentCurrency=e},setPurchaseAmount(e){this.state.purchaseAmount=e},setPaymentAmount(e){this.state.paymentAmount=e},async getAvailableCurrencies(){let e=await F.getOnrampOptions();eh.purchaseCurrencies=e.purchaseCurrencies,eh.paymentCurrencies=e.paymentCurrencies,eh.paymentCurrency=e.paymentCurrencies[0]||ep,eh.purchaseCurrency=e.purchaseCurrencies[0]||ed,await L.fetchCurrencyImages(e.paymentCurrencies.map(e=>e.id)),await L.fetchTokenImages(e.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){eh.quotesLoading=!0;try{let e=await F.getOnrampQuote({purchaseCurrency:eh.purchaseCurrency,paymentCurrency:eh.paymentCurrency,amount:eh.paymentAmount?.toString()||"0",network:eh.purchaseCurrency?.symbol});return eh.quotesLoading=!1,eh.purchaseAmount=Number(e.purchaseAmount.amount),e}catch(e){return eh.error=e.message,eh.quotesLoading=!1,null}finally{eh.quotesLoading=!1}},resetState(){eh.providers=s,eh.selectedProvider=null,eh.error=null,eh.purchaseCurrency=ed,eh.paymentCurrency=ep,eh.purchaseCurrencies=[ed],eh.paymentCurrencies=[],eh.paymentAmount=void 0,eh.purchaseAmount=void 0,eh.quotesLoading=!1}},ew=(0,o.sj)({loading:!1}),ef={state:ew,subscribe:e=>(0,o.Ld)(ew,()=>e(ew)),subscribeKey:(e,t)=>(0,r.VW)(ew,e,t),setToken(e){e&&(ew.token=(0,o.iH)(e))},setTokenAmount(e){ew.sendTokenAmount=e},setReceiverAddress(e){ew.receiverAddress=e},setReceiverProfileImageUrl(e){ew.receiverProfileImageUrl=e},setReceiverProfileName(e){ew.receiverProfileName=e},setGasPrice(e){ew.gasPrice=e},setGasPriceInUsd(e){ew.gasPriceInUSD=e},setLoading(e){ew.loading=e},sendToken(){this.state.token?.address&&this.state.sendTokenAmount&&this.state.receiverAddress?(R.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:el.state.preferredAccountType===q.y_.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token.address,amount:this.state.sendTokenAmount,network:j.state.caipNetwork?.id||""}}),this.sendERC20Token({receiverAddress:this.state.receiverAddress,tokenAddress:this.state.token.address,sendTokenAmount:this.state.sendTokenAmount,decimals:this.state.token.quantity.decimals})):this.state.receiverAddress&&this.state.sendTokenAmount&&this.state.gasPrice&&this.state.token?.quantity.decimals&&(R.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:el.state.preferredAccountType===q.y_.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token?.symbol,amount:this.state.sendTokenAmount,network:j.state.caipNetwork?.id||""}}),this.sendNativeToken({receiverAddress:this.state.receiverAddress,sendTokenAmount:this.state.sendTokenAmount,gasPrice:this.state.gasPrice,decimals:this.state.token.quantity.decimals}))},async sendNativeToken(e){ei.pushTransactionStack({view:"Account",goBack:!1});let t=e.receiverAddress,i=el.state.address,r=J.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));try{await J.sendTransaction({to:t,address:i,data:"0x",value:r,gasPrice:e.gasPrice}),K.showSuccess("Transaction started"),R.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:el.state.preferredAccountType===q.y_.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token?.symbol||"",amount:e.sendTokenAmount,network:j.state.caipNetwork?.id||""}}),this.resetSend()}catch(t){R.sendEvent({type:"track",event:"SEND_ERROR",properties:{isSmartAccount:el.state.preferredAccountType===q.y_.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token?.symbol||"",amount:e.sendTokenAmount,network:j.state.caipNetwork?.id||""}}),K.showError("Something went wrong")}},async sendERC20Token(e){ei.pushTransactionStack({view:"Account",goBack:!1});let t=J.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));try{el.state.address&&e.sendTokenAmount&&e.receiverAddress&&e.tokenAddress&&(await J.writeContract({fromAddress:el.state.address,tokenAddress:c.getPlainAddress(e.tokenAddress),receiverAddress:e.receiverAddress,tokenAmount:t,method:"transfer",abi:a.em}),K.showSuccess("Transaction started"),this.resetSend())}catch(e){K.showError("Something went wrong")}},resetSend(){ew.token=void 0,ew.sendTokenAmount=void 0,ew.receiverAddress=void 0,ew.receiverProfileImageUrl=void 0,ew.receiverProfileName=void 0,ew.loading=!1}},em=(0,o.sj)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),ev={state:em,subscribe:e=>(0,o.Ld)(em,()=>e(em)),subscribeKey:(e,t)=>(0,r.VW)(em,e,t),showTooltip({message:e,triggerRect:t,variant:i}){em.open=!0,em.message=e,em.triggerRect=t,em.variant=i},hide(){em.open=!1,em.message="",em.triggerRect={width:0,height:0,top:0,left:0}}},eb={convertEVMChainIdToCoinType(e){if(e>=2147483648)throw Error("Invalid chainId");return(2147483648|e)>>>0}},ey=(0,o.sj)({suggestions:[],loading:!1}),ex={state:ey,subscribe:e=>(0,o.Ld)(ey,()=>e(ey)),subscribeKey:(e,t)=>(0,r.VW)(ey,e,t),async resolveName(e){try{return await F.lookupEnsName(e)}catch(e){throw Error(e?.reasons?.[0]?.description||"Error resolving name")}},async isNameRegistered(e){try{return await F.lookupEnsName(e),!0}catch{return!1}},async getSuggestions(e){try{ey.loading=!0,ey.suggestions=[];let t=await F.getEnsNameSuggestions(e);return ey.suggestions=t.suggestions.map(e=>({...e,name:e.name.replace(a.bq.WC_NAME_SUFFIX,"")}))||[],ey.suggestions}catch(t){let e=this.parseEnsApiError(t,"Error fetching name suggestions");throw Error(e)}finally{ey.loading=!1}},async getNamesForAddress(e){try{let t=j.state.caipNetwork;if(!t)return[];let i=await F.reverseLookupEnsName({address:e});return i}catch(t){let e=this.parseEnsApiError(t,"Error fetching names for address");throw Error(e)}},async registerName(e){let t=j.state.caipNetwork;if(!t)throw Error("Network not found");let i=el.state.address,r=k.getAuthConnector();if(!i||!r)throw Error("Address or auth connector not found");ey.loading=!0;try{let r=JSON.stringify({name:`${e}${a.bq.WC_NAME_SUFFIX}`,attributes:{},timestamp:Math.floor(Date.now()/1e3)});ei.pushTransactionStack({view:"RegisterAccountNameSuccess",goBack:!1,replace:!0,onCancel(){ey.loading=!1}});let o=await J.signMessage(r),n=a.p1.caipNetworkIdToNumber(t.id);if(!n)throw Error("Network not found");let s=eb.convertEVMChainIdToCoinType(n);await F.registerEnsName({coinType:s,address:i,signature:o,message:r}),el.setProfileName(`${e}${a.bq.WC_NAME_SUFFIX}`),ei.replace("RegisterAccountNameSuccess")}catch(i){let t=this.parseEnsApiError(i,`Error registering name ${e}`);throw ei.replace("RegisterAccountName"),Error(t)}finally{ey.loading=!1}},validateName:e=>/^[a-zA-Z0-9-]{4,}$/u.test(e),parseEnsApiError:(e,t)=>e?.reasons?.[0]?.description||t},eC={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?b.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?b.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?b.state.connectorImages[e.imageId]:void 0},ek={goBackOrCloseModal(){ei.state.history.length>1?ei.goBack():eu.close()},navigateAfterNetworkSwitch(){let{history:e}=ei.state,t=e.findIndex(e=>"Networks"===e);t>=1?ei.goBackToIndex(t-1):eu.close()},navigateAfterPreferredAccountTypeSelect(){let{isSiweEnabled:e}=W.state;e&&O.state.activeChain===a.bq.CHAIN.EVM?ei.push("ConnectingSiwe"):ei.push("Account")}}},94081:function(e,t,i){"use strict";i.d(t,{C:function(){return n}});var r=i(60056);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o={attribute:!0,type:String,converter:r.Ts,reflect:!1,hasChanged:r.Qu},a=(e=o,t,i)=>{let{kind:r,metadata:a}=i,n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),n.set(i.name,e),"accessor"===r){let{name:r}=i;return{set(i){let o=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,o,e)},init(t){return void 0!==t&&this.P(r,void 0,e),t}}}if("setter"===r){let{name:r}=i;return function(i){let o=this[r];t.call(this,i),this.requestUpdate(r,o,e)}}throw Error("Unsupported decorator location: "+r)};function n(e){return(t,i)=>"object"==typeof i?a(e,t,i):((e,t,i)=>{let r=t.hasOwnProperty(i);return t.constructor.createProperty(i,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}},47655:function(e,t,i){"use strict";i.d(t,{S:function(){return o}});var r=i(94081);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o(e){return(0,r.C)({...e,state:!0,attribute:!1})}},60056:function(e,t,i){"use strict";i.d(t,{fl:function(){return A},iv:function(){return c},Ts:function(){return k},Qu:function(){return T}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let r=globalThis,o=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),n=new WeakMap;class s{constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(o&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(t,e))}return e}toString(){return this.cssText}}let l=e=>new s("string"==typeof e?e:e+"",void 0,a),c=(e,...t)=>{let i=1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new s(i,e,a)},u=(e,t)=>{if(o)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let i of t){let t=document.createElement("style"),o=r.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}},d=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return l(t)})(e):e,{is:p,defineProperty:h,getOwnPropertyDescriptor:g,getOwnPropertyNames:w,getOwnPropertySymbols:f,getPrototypeOf:m}=Object,v=globalThis,b=v.trustedTypes,y=b?b.emptyScript:"",x=v.reactiveElementPolyfillSupport,C=(e,t)=>e,k={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},T=(e,t)=>!p(e,t),S={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:T};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&h(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){let{get:r,set:o}=g(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return r?.call(this)},set(t){let a=r?.call(this);o.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let e=this.properties,t=[...w(e),...f(e)];for(let i of t)this.createProperty(i,e[i])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,i]of t)this.elementProperties.set(e,i)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let e of i)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){let i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){let o=(void 0!==i.converter?.toAttribute?i.converter:k).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){let i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){let e=i.getPropertyOptions(r),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:k;this._$Em=r,this[r]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(!((i??=this.constructor.getPropertyOptions(e)).hasChanged??T)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[C("elementProperties")]=new Map,A[C("finalized")]=new Map,x?.({ReactiveElement:A}),(v.reactiveElementVersions??=[]).push("2.0.4")},26983:function(e,t,i){"use strict";i.d(t,{Al:function(){return L},Jb:function(){return S},Ld:function(){return A},dy:function(){return T},sY:function(){return W}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let r=globalThis,o=r.trustedTypes,a=o?o.createPolicy("lit-html",{createHTML:e=>e}):void 0,n="$lit$",s=`lit$${Math.random().toFixed(9).slice(2)}$`,l="?"+s,c=`<${l}>`,u=document,d=()=>u.createComment(""),p=e=>null===e||"object"!=typeof e&&"function"!=typeof e,h=Array.isArray,g=e=>h(e)||"function"==typeof e?.[Symbol.iterator],w="[ 	\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,v=/>/g,b=RegExp(`>|${w}(?:([^\\s"'>=/]+)(${w}*=${w}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),y=/'/g,x=/"/g,C=/^(?:script|style|textarea|title)$/i,k=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),T=k(1),S=(k(2),k(3),Symbol.for("lit-noChange")),A=Symbol.for("lit-nothing"),_=new WeakMap,E=u.createTreeWalker(u,129);function $(e,t){if(!h(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a?a.createHTML(t):t}let R=(e,t)=>{let i=e.length-1,r=[],o,a=2===t?"<svg>":3===t?"<math>":"",l=f;for(let t=0;t<i;t++){let i=e[t],u,d,p=-1,h=0;for(;h<i.length&&(l.lastIndex=h,null!==(d=l.exec(i)));)h=l.lastIndex,l===f?"!--"===d[1]?l=m:void 0!==d[1]?l=v:void 0!==d[2]?(C.test(d[2])&&(o=RegExp("</"+d[2],"g")),l=b):void 0!==d[3]&&(l=b):l===b?">"===d[0]?(l=o??f,p=-1):void 0===d[1]?p=-2:(p=l.lastIndex-d[2].length,u=d[1],l=void 0===d[3]?b:'"'===d[3]?x:y):l===x||l===y?l=b:l===m||l===v?l=f:(l=b,o=void 0);let g=l===b&&e[t+1].startsWith("/>")?" ":"";a+=l===f?i+c:p>=0?(r.push(u),i.slice(0,p)+n+i.slice(p)+s+g):i+s+(-2===p?t:g)}return[$(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class P{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let a=0,c=0,u=e.length-1,p=this.parts,[h,g]=R(e,t);if(this.el=P.createElement(h,i),E.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=E.nextNode())&&p.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(n)){let t=g[c++],i=r.getAttribute(e).split(s),o=/([.?@])?(.*)/.exec(t);p.push({type:1,index:a,name:o[2],strings:i,ctor:"."===o[1]?j:"?"===o[1]?U:"@"===o[1]?B:D}),r.removeAttribute(e)}else e.startsWith(s)&&(p.push({type:6,index:a}),r.removeAttribute(e));if(C.test(r.tagName)){let e=r.textContent.split(s),t=e.length-1;if(t>0){r.textContent=o?o.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],d()),E.nextNode(),p.push({type:2,index:++a});r.append(e[t],d())}}}else if(8===r.nodeType){if(r.data===l)p.push({type:2,index:a});else{let e=-1;for(;-1!==(e=r.data.indexOf(s,e+1));)p.push({type:7,index:a}),e+=s.length-1}}a++}}static createElement(e,t){let i=u.createElement("template");return i.innerHTML=e,i}}function N(e,t,i=e,r){if(t===S)return t;let o=void 0!==r?i.o?.[r]:i.l,a=p(t)?void 0:t._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),void 0===a?o=void 0:(o=new a(e))._$AT(e,i,r),void 0!==r?(i.o??=[])[r]=o:i.l=o),void 0!==o&&(t=N(e,o._$AS(e,t.values),o,r)),t}class I{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??u).importNode(t,!0);E.currentNode=r;let o=E.nextNode(),a=0,n=0,s=i[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new O(o,o.nextSibling,this,e):1===s.type?t=new s.ctor(o,s.name,s.strings,this,e):6===s.type&&(t=new M(o,this,e)),this._$AV.push(t),s=i[++n]}a!==s?.index&&(o=E.nextNode(),a++)}return E.currentNode=u,r}p(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class O{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,t,i,r){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this.v=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){p(e=N(this,e,t))?e===A||null==e||""===e?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==S&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):g(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&p(this._$AH)?this._$AA.nextSibling.data=e:this.T(u.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=P.createElement($(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new I(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=_.get(e.strings);return void 0===t&&_.set(e.strings,t=new P(e)),t}k(e){h(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,r=0;for(let o of e)r===t.length?t.push(i=new O(this.O(d()),this.O(d()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this.v=e,this._$AP?.(e))}}class D{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}_$AI(e,t=this,i,r){let o=this.strings,a=!1;if(void 0===o)(a=!p(e=N(this,e,t,0))||e!==this._$AH&&e!==S)&&(this._$AH=e);else{let r,n;let s=e;for(e=o[0],r=0;r<o.length-1;r++)(n=N(this,s[i+r],t,r))===S&&(n=this._$AH[r]),a||=!p(n)||n!==this._$AH[r],n===A?e=A:e!==A&&(e+=(n??"")+o[r+1]),this._$AH[r]=n}a&&!r&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class j extends D{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class U extends D{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class B extends D{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){if((e=N(this,e,t,0)??A)===S)return;let i=this._$AH,r=e===A&&i!==A||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==A&&(i===A||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class M{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}}let L={M:n,P:s,A:l,C:1,L:R,R:I,D:g,V:N,I:O,H:D,N:U,U:B,B:j,F:M},z=r.litHtmlPolyfillSupport;z?.(P,O),(r.litHtmlVersions??=[]).push("3.2.0");let W=(e,t,i)=>{let r=i?.renderBefore??t,o=r._$litPart$;if(void 0===o){let e=i?.renderBefore??null;r._$litPart$=o=new O(t.insertBefore(d(),e),e,void 0,i??{})}return o._$AI(e),o}},54222:function(e,t,i){"use strict";i.d(t,{Cb:function(){return r.C},SB:function(){return o.S}});var r=i(94081),o=i(47655)},29974:function(e,t,i){"use strict";i.d(t,{oi:function(){return a},iv:function(){return r.iv},dy:function(){return o.dy}});var r=i(60056),o=i(26983);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends r.fl{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=(0,o.sY)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return o.Jb}}a._$litElement$=!0,a.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:a});let n=globalThis.litElementPolyfillSupport;n?.({LitElement:a}),(globalThis.litElementVersions??=[]).push("4.1.0")},49117:function(e,t,i){"use strict";let r,o,a;i.r(t),i.d(t,{MathUtil:function(){return a3},TransactionUtil:function(){return a6},UiHelperUtil:function(){return iI},WuiAccountButton:function(){return iV},WuiAllWalletsImage:function(){return iX},WuiAvatar:function(){return iM},WuiBalance:function(){return ao},WuiBanner:function(){return ay},WuiBannerImg:function(){return ak},WuiButton:function(){return i3},WuiCard:function(){return eN},WuiCardSelect:function(){return ra},WuiCardSelectLoader:function(){return i8},WuiChip:function(){return rl},WuiChipButton:function(){return ag},WuiCompatibleNetwork:function(){return am},WuiConnectButton:function(){return rd},WuiCtaButton:function(){return rg},WuiDetailsGroup:function(){return rf},WuiDetailsGroupItem:function(){return rb},WuiDropdownMenu:function(){return rC},WuiEmailInput:function(){return rz},WuiEnsInput:function(){return rH},WuiFlex:function(){return ij},WuiGrid:function(){return aJ},WuiIcon:function(){return tY},WuiIconBox:function(){return iW},WuiIconButton:function(){return aH},WuiIconLink:function(){return rY},WuiImage:function(){return tG},WuiInputAmount:function(){return aO},WuiInputElement:function(){return rG},WuiInputNumeric:function(){return rJ},WuiInputText:function(){return rB},WuiLink:function(){return r2},WuiListAccordion:function(){return oJ},WuiListAccount:function(){return az},WuiListButton:function(){return aY},WuiListContent:function(){return o2},WuiListDescription:function(){return a$},WuiListItem:function(){return r4},WuiListNetwork:function(){return o4},WuiListSocial:function(){return aG},WuiListToken:function(){return aA},WuiListWallet:function(){return oc},WuiListWalletTransaction:function(){return o9},WuiLoadingHexagon:function(){return tQ},WuiLoadingSpinner:function(){return t1},WuiLoadingThumbnail:function(){return t5},WuiLogo:function(){return op},WuiLogoSelect:function(){return ow},WuiNetworkButton:function(){return ov},WuiNetworkImage:function(){return ri},WuiNoticeCard:function(){return oG},WuiOtp:function(){return ox},WuiPreviewItem:function(){return aU},WuiProfileButton:function(){return as},WuiProfileButtonV2:function(){return ad},WuiPromo:function(){return at},WuiQrCode:function(){return o_},WuiSearchBar:function(){return o$},WuiSeparator:function(){return a2},WuiShimmer:function(){return t8},WuiSnackbar:function(){return oN},WuiTabs:function(){return oD},WuiTag:function(){return on},WuiText:function(){return io},WuiTokenButton:function(){return oB},WuiTokenListItem:function(){return oH},WuiTooltip:function(){return oz},WuiTransactionListItem:function(){return ot},WuiTransactionListItemLoader:function(){return or},WuiTransactionVisual:function(){return r9},WuiVisual:function(){return iP},WuiVisualThumbnail:function(){return oY},WuiWalletImage:function(){return iK},customElement:function(){return eR},initializeTheming:function(){return ek},setColorTheme:function(){return eT},setThemeVariables:function(){return eS},swapInputMaskBottomSvg:function(){return ev},swapInputMaskTopSvg:function(){return eb}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=globalThis,s=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),c=new WeakMap;class u{constructor(e,t,i){if(this._$cssResult$=!0,i!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(s&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=c.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&c.set(t,e))}return e}toString(){return this.cssText}}let d=e=>new u("string"==typeof e?e:e+"",void 0,l),p=(e,...t)=>{let i=1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new u(i,e,l)},h=(e,t)=>{if(s)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let i of t){let t=document.createElement("style"),r=n.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=i.cssText,e.appendChild(t)}},g=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return d(t)})(e):e,{is:w,defineProperty:f,getOwnPropertyDescriptor:m,getOwnPropertyNames:v,getOwnPropertySymbols:b,getPrototypeOf:y}=Object,x=globalThis,C=x.trustedTypes,k=C?C.emptyScript:"",T=x.reactiveElementPolyfillSupport,S=(e,t)=>e,A={toAttribute(e,t){switch(t){case Boolean:e=e?k:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},_=(e,t)=>!w(e,t),E={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),x.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=E){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){let{get:r,set:o}=m(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return r?.call(this)},set(t){let a=r?.call(this);o.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??E}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;let e=y(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){let e=this.properties,t=[...v(e),...b(e)];for(let i of t)this.createProperty(i,e[i])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,i]of t)this.elementProperties.set(e,i)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let e of i)t.unshift(g(e))}else void 0!==e&&t.push(g(e));return t}static _$Eu(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return h(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){let i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){let o=(void 0!==i.converter?.toAttribute?i.converter:A).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){let i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){let e=i.getPropertyOptions(r),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:A;this._$Em=r,this[r]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(!((i??=this.constructor.getPropertyOptions(e)).hasChanged??_)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[S("elementProperties")]=new Map,$[S("finalized")]=new Map,T?.({ReactiveElement:$}),(x.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let R=globalThis,P=R.trustedTypes,N=P?P.createPolicy("lit-html",{createHTML:e=>e}):void 0,I="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+O,j=`<${D}>`,U=document,B=()=>U.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,z=e=>L(e)||"function"==typeof e?.[Symbol.iterator],W="[ 	\n\f\r]",Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,V=/>/g,F=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,K=/"/g,q=/^(?:script|style|textarea|title)$/i,G=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),X=G(1),Q=G(2),J=(G(3),Symbol.for("lit-noChange")),ee=Symbol.for("lit-nothing"),et=new WeakMap,ei=U.createTreeWalker(U,129);function er(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==N?N.createHTML(t):t}let eo=(e,t)=>{let i=e.length-1,r=[],o,a=2===t?"<svg>":3===t?"<math>":"",n=Z;for(let t=0;t<i;t++){let i=e[t],s,l,c=-1,u=0;for(;u<i.length&&(n.lastIndex=u,null!==(l=n.exec(i)));)u=n.lastIndex,n===Z?"!--"===l[1]?n=H:void 0!==l[1]?n=V:void 0!==l[2]?(q.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=F):void 0!==l[3]&&(n=F):n===F?">"===l[0]?(n=o??Z,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,s=l[1],n=void 0===l[3]?F:'"'===l[3]?K:Y):n===K||n===Y?n=F:n===H||n===V?n=Z:(n=F,o=void 0);let d=n===F&&e[t+1].startsWith("/>")?" ":"";a+=n===Z?i+j:c>=0?(r.push(s),i.slice(0,c)+I+i.slice(c)+O+d):i+O+(-2===c?t:d)}return[er(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class ea{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,a=0,n=e.length-1,s=this.parts,[l,c]=eo(e,t);if(this.el=ea.createElement(l,i),ei.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=ei.nextNode())&&s.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(I)){let t=c[a++],i=r.getAttribute(e).split(O),n=/([.?@])?(.*)/.exec(t);s.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?eu:"?"===n[1]?ed:"@"===n[1]?ep:ec}),r.removeAttribute(e)}else e.startsWith(O)&&(s.push({type:6,index:o}),r.removeAttribute(e));if(q.test(r.tagName)){let e=r.textContent.split(O),t=e.length-1;if(t>0){r.textContent=P?P.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],B()),ei.nextNode(),s.push({type:2,index:++o});r.append(e[t],B())}}}else if(8===r.nodeType){if(r.data===D)s.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(O,e+1));)s.push({type:7,index:o}),e+=O.length-1}}o++}}static createElement(e,t){let i=U.createElement("template");return i.innerHTML=e,i}}function en(e,t,i=e,r){if(t===J)return t;let o=void 0!==r?i.o?.[r]:i.l,a=M(t)?void 0:t._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),void 0===a?o=void 0:(o=new a(e))._$AT(e,i,r),void 0!==r?(i.o??=[])[r]=o:i.l=o),void 0!==o&&(t=en(e,o._$AS(e,t.values),o,r)),t}class es{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??U).importNode(t,!0);ei.currentNode=r;let o=ei.nextNode(),a=0,n=0,s=i[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new el(o,o.nextSibling,this,e):1===s.type?t=new s.ctor(o,s.name,s.strings,this,e):6===s.type&&(t=new eh(o,this,e)),this._$AV.push(t),s=i[++n]}a!==s?.index&&(o=ei.nextNode(),a++)}return ei.currentNode=U,r}p(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class el{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,t,i,r){this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this.v=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){M(e=en(this,e,t))?e===ee||null==e||""===e?(this._$AH!==ee&&this._$AR(),this._$AH=ee):e!==this._$AH&&e!==J&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):z(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ee&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(U.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=ea.createElement(er(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new es(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=et.get(e.strings);return void 0===t&&et.set(e.strings,t=new ea(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,r=0;for(let o of e)r===t.length?t.push(i=new el(this.O(B()),this.O(B()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this.v=e,this._$AP?.(e))}}class ec{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,o){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ee}_$AI(e,t=this,i,r){let o=this.strings,a=!1;if(void 0===o)(a=!M(e=en(this,e,t,0))||e!==this._$AH&&e!==J)&&(this._$AH=e);else{let r,n;let s=e;for(e=o[0],r=0;r<o.length-1;r++)(n=en(this,s[i+r],t,r))===J&&(n=this._$AH[r]),a||=!M(n)||n!==this._$AH[r],n===ee?e=ee:e!==ee&&(e+=(n??"")+o[r+1]),this._$AH[r]=n}a&&!r&&this.j(e)}j(e){e===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class eu extends ec{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ee?void 0:e}}class ed extends ec{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ee)}}class ep extends ec{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){if((e=en(this,e,t,0)??ee)===J)return;let i=this._$AH,r=e===ee&&i!==ee||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==ee&&(i===ee||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class eh{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){en(this,e)}}let eg=R.litHtmlPolyfillSupport;eg?.(ea,el),(R.litHtmlVersions??=[]).push("3.2.0");let ew=(e,t,i)=>{let r=i?.renderBefore??t,o=r._$litPart$;if(void 0===o){let e=i?.renderBefore??null;r._$litPart$=o=new el(t.insertBefore(B(),e),e,void 0,i??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ef extends ${constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=ew(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return J}}ef._$litElement$=!0,ef.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ef});let em=globalThis.litElementPolyfillSupport;em?.({LitElement:ef}),(globalThis.litElementVersions??=[]).push("4.1.0");let ev=Q`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`,eb=Q`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`;var ey,ex,eC=i(92361);function ek(e,t){r=document.createElement("style"),o=document.createElement("style"),a=document.createElement("style"),r.textContent=eA(e).core.cssText,o.textContent=eA(e).dark.cssText,a.textContent=eA(e).light.cssText,document.head.appendChild(r),document.head.appendChild(o),document.head.appendChild(a),eT(t)}function eT(e){o&&a&&("light"===e?(o.removeAttribute("media"),a.media="enabled"):(a.removeAttribute("media"),o.media="enabled"))}function eS(e){r&&o&&a&&(r.textContent=eA(e).core.cssText,o.textContent=eA(e).dark.cssText,a.textContent=eA(e).light.cssText)}function eA(e){return{core:p`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${d(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${d(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${d(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${d(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${d(e?.["--w3m-z-index"]||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:p`
      :root {
        --w3m-color-mix: ${d(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${d((0,eC.tU)(e,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${d((0,eC.tU)(e,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;
      }
    `,dark:p`
      :root {
        --w3m-color-mix: ${d(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${d((0,eC.tU)(e,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${d((0,eC.tU)(e,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}let e_=p`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,eE=p`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,e$=p`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function eR(e){return function(t){return"function"==typeof t?(customElements.get(e)||customElements.define(e,t),t):function(e,t){let{kind:i,elements:r}=t;return{kind:i,elements:r,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}var eP=p`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let eN=class extends ef{render(){return X`<slot></slot>`}};eN.styles=[e_,eP],eN=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([eR("wui-card")],eN);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eI={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:_},eO=(e=eI,t,i)=>{let{kind:r,metadata:o}=i,a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(i.name,e),"accessor"===r){let{name:r}=i;return{set(i){let o=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,o,e)},init(t){return void 0!==t&&this.P(r,void 0,e),t}}}if("setter"===r){let{name:r}=i;return function(i){let o=this[r];t.call(this,i),this.requestUpdate(r,o,e)}}throw Error("Unsupported decorator location: "+r)};function eD(e){return(t,i)=>"object"==typeof i?eO(e,t,i):((e,t,i)=>{let r=t.hasOwnProperty(i);return t.constructor.createProperty(i,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ej(e){return eD({...e,state:!0,attribute:!1})}var eU=p`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;let eB=Q`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`,eM=Q`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,eL=Q`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,ez=Q`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,eW=Q`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eZ=Q`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eH=Q`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,eV=Q`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eF=Q`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,eY=Q`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,eK=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,eq=Q`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,eG=Q`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`,eX=Q`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="#26D962"/>
</svg>
`,eQ=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eJ=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,e0=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,e1=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,e2=Q`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,e3=Q`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`,e5=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,e4=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,e6=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,e8=Q`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,e9=Q` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,e7=Q`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,te=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,tt=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ti=Q`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,tr=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,to=Q`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,ta=Q`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,tn=Q`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ts=Q`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,tl=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,tc=Q`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,tu=Q`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,td=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,tp=Q`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`,th=Q`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,tg=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,tw=Q`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,tf=Q`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`,tm=Q`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,tv=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,tb=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,ty=Q` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,tx=Q`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,tC=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,tk=Q`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,tT=Q`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,tS=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,tA=Q`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,t_=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,tE=Q`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,t$=Q`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,tR=Q`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,tP=Q`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,tN=Q`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,tI=Q`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`,tO=Q`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,tD=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,tj=Q`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,tU=Q`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,tB=Q`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,tM=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,tL=Q`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,tz=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,tW=Q`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`,tZ=Q`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`,tH=Q`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;var tV=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let tF={add:eB,allWallets:eM,arrowBottomCircle:eL,appStore:ez,apple:eW,arrowBottom:eZ,arrowLeft:eH,arrowRight:eV,arrowTop:eF,bank:eY,browser:eK,card:eq,checkmark:eX,checkmarkBold:eG,chevronBottom:eQ,chevronLeft:eJ,chevronRight:e0,chevronTop:e1,chromeStore:e2,clock:e3,close:e5,compass:e6,coinPlaceholder:e4,copy:e8,cursor:e9,cursorTransparent:e7,desktop:te,disconnect:tt,discord:ti,etherscan:tr,extension:to,externalLink:ta,facebook:tn,farcaster:ts,filters:tl,github:tc,google:tu,helpCircle:td,image:tp,id:tZ,infoCircle:th,lightbulb:tW,mail:tg,mobile:tw,more:tf,networkPlaceholder:tm,nftPlaceholder:tv,off:tb,playStore:ty,plus:tx,qrCode:tC,recycleHorizontal:tk,refresh:tT,search:tS,send:tA,swapHorizontal:t_,swapHorizontalMedium:t$,swapHorizontalBold:tE,swapHorizontalRoundedBold:tR,swapVertical:tP,telegram:tN,threeDots:tI,twitch:tO,twitter:tH,twitterIcon:tD,verify:tj,verifyFilled:tU,wallet:tM,walletConnect:tL,walletPlaceholder:tB,warningCircle:tz,x:tH},tY=class extends ef{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,X`${tF[this.name]}`}};tY.styles=[e_,e$,eU],tV([eD()],tY.prototype,"size",void 0),tV([eD()],tY.prototype,"name",void 0),tV([eD()],tY.prototype,"color",void 0),tY=tV([eR("wui-icon")],tY);var tK=p`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,tq=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let tG=class extends ef{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,X`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};tG.styles=[e_,e$,tK],tq([eD()],tG.prototype,"src",void 0),tq([eD()],tG.prototype,"alt",void 0),tq([eD()],tG.prototype,"size",void 0),tG=tq([eR("wui-image")],tG);var tX=p`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let tQ=class extends ef{render(){return X`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};tQ.styles=[e_,tX],tQ=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([eR("wui-loading-hexagon")],tQ);var tJ=p`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,t0=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let t1=class extends ef{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${"inherit"===this.color?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,X`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};t1.styles=[e_,tJ],t0([eD()],t1.prototype,"color",void 0),t0([eD()],t1.prototype,"size",void 0),t1=t0([eR("wui-loading-spinner")],t1);var t2=p`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,t3=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let t5=class extends ef{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return X`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};t5.styles=[e_,t2],t3([eD({type:Number})],t5.prototype,"radius",void 0),t5=t3([eR("wui-loading-thumbnail")],t5);var t4=p`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,t6=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let t8=class extends ef{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,X`<slot></slot>`}};t8.styles=[t4],t6([eD()],t8.prototype,"width",void 0),t6([eD()],t8.prototype,"height",void 0),t6([eD()],t8.prototype,"borderRadius",void 0),t6([eD()],t8.prototype,"variant",void 0),t8=t6([eR("wui-shimmer")],t8);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let t9={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},t7=e=>(...t)=>({_$litDirective$:e,values:t});class ie{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this.t=e,this._$AM=t,this.i=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let it=t7(class extends ie{constructor(e){if(super(e),e.type!==t9.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let i=e.element.classList;for(let e of this.st)e in t||(i.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return J}});var ii=p`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`,ir=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let io=class extends ef{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,X`<slot class=${it(e)}></slot>`}};io.styles=[e_,ii],ir([eD()],io.prototype,"variant",void 0),ir([eD()],io.prototype,"color",void 0),ir([eD()],io.prototype,"align",void 0),ir([eD()],io.prototype,"lineClamp",void 0),io=ir([eR("wui-text")],io);let ia=Q`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,is=Q`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,il=Q`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,ic=Q`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,iu=Q`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,id=Q`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,ip=Q`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,ih=Q`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,ig=Q`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,iw=Q`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,im=Q`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,iv=Q`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,ib=Q`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,iy=Q`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,ix=Q`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,iC=Q`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,ik=Q`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,iT=Q`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,iS=Q`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,iA=Q`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,i_=Q`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`;var iE=p`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`,i$=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let iR={browser:ia,dao:is,defi:il,defiAlt:ic,eth:iu,layers:id,lock:ip,login:ih,network:ig,nft:iw,noun:im,profile:iv,system:ib,coinbase:iy,onrampCard:iT,moonpay:ix,stripe:iC,paypal:ik,google:iS,pencil:iA,lightbulb:i_},iP=class extends ef{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,X`${iR[this.name]}`}};iP.styles=[e_,iE],i$([eD()],iP.prototype,"name",void 0),i$([eD()],iP.prototype,"size",void 0),iP=i$([eR("wui-visual")],iP);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let iN=e=>e??ee,iI={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName(e){try{let t=new URL(e);return t.hostname}catch(e){return""}},getTruncateString:({string:e,charsStart:t,charsEnd:i,truncate:r})=>e.length<=t+i?e:"end"===r?`${e.substring(0,t)}...`:"start"===r?`...${e.substring(e.length-i)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(i))}`,generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,""),i=t.substring(0,6),r=this.hexToRgb(i),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),a=Number(o?.replace("px","")),n=100-3*a,s=`${n}% ${n}% at 65% 40%`,l=[];for(let e=0;e<5;e+=1){let t=this.tintColor(r,.15*e);l.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${l[0]};
    --local-color-2: ${l[1]};
    --local-color-3: ${l[2]};
    --local-color-4: ${l[3]};
    --local-color-5: ${l[4]};
    --local-radial-circle: ${s}
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[i,r,o]=e;return[Math.round(i+(255-i)*t),Math.round(r+(255-r)*t),Math.round(o+(255-o)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark"),splitBalance(e){let t=e.split(".");return 2===t.length?[t[0],t[1]]:["0","00"]},roundNumber(e,t,i){let r=e.toString().length>=t?Number(e).toFixed(i):e;return r},formatNumberToLocalString:(e,t=2)=>void 0===e?"0.00":"number"==typeof e?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})};var iO=p`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,iD=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ij=class extends ef{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&iI.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&iI.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&iI.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&iI.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&iI.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&iI.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&iI.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&iI.getSpacingStyles(this.margin,3)};
    `,X`<slot></slot>`}};ij.styles=[e_,iO],iD([eD()],ij.prototype,"flexDirection",void 0),iD([eD()],ij.prototype,"flexWrap",void 0),iD([eD()],ij.prototype,"flexBasis",void 0),iD([eD()],ij.prototype,"flexGrow",void 0),iD([eD()],ij.prototype,"flexShrink",void 0),iD([eD()],ij.prototype,"alignItems",void 0),iD([eD()],ij.prototype,"justifyContent",void 0),iD([eD()],ij.prototype,"columnGap",void 0),iD([eD()],ij.prototype,"rowGap",void 0),iD([eD()],ij.prototype,"gap",void 0),iD([eD()],ij.prototype,"padding",void 0),iD([eD()],ij.prototype,"margin",void 0),ij=iD([eR("wui-flex")],ij);var iU=p`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,iB=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let iM=class extends ef{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `,X`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",X`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=iI.generateAvatarColors(this.address);return this.style.cssText+=`
 ${e}`,null}return this.dataset.variant="default",null}};iM.styles=[e_,iU],iB([eD()],iM.prototype,"imageSrc",void 0),iB([eD()],iM.prototype,"alt",void 0),iB([eD()],iM.prototype,"address",void 0),iB([eD()],iM.prototype,"size",void 0),iM=iB([eR("wui-avatar")],iM);var iL=p`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,iz=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let iW=class extends ef{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e=this.iconSize||this.size,t="lg"===this.size,i="xl"===this.size,r="gray"===this.background,o="opaque"===this.background,a="accent-100"===this.backgroundColor&&o||"success-100"===this.backgroundColor&&o||"error-100"===this.backgroundColor&&o||"inverse-100"===this.backgroundColor&&o,n=`var(--wui-color-${this.backgroundColor})`;return a?n=`var(--wui-icon-box-bg-${this.backgroundColor})`:r&&(n=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${n};
       --local-bg-mix: ${a||r?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":i?"s":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,X` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};iW.styles=[e_,eE,iL],iz([eD()],iW.prototype,"size",void 0),iz([eD()],iW.prototype,"backgroundColor",void 0),iz([eD()],iW.prototype,"iconColor",void 0),iz([eD()],iW.prototype,"iconSize",void 0),iz([eD()],iW.prototype,"background",void 0),iz([eD({type:Boolean})],iW.prototype,"border",void 0),iz([eD()],iW.prototype,"borderColor",void 0),iz([eD()],iW.prototype,"icon",void 0),iW=iz([eR("wui-icon-box")],iW);var iZ=p`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,iH=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let iV=class extends ef{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return X`
      <button
        ?disabled=${this.disabled}
        class=${iN(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?iI.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return X` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){let e=this.networkSrc?X`<wui-image src=${this.networkSrc}></wui-image>`:X`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return X`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};iV.styles=[e_,eE,iZ],iH([eD()],iV.prototype,"networkSrc",void 0),iH([eD()],iV.prototype,"avatarSrc",void 0),iH([eD()],iV.prototype,"balance",void 0),iH([eD({type:Boolean})],iV.prototype,"isUnsupportedChain",void 0),iH([eD({type:Boolean})],iV.prototype,"disabled",void 0),iH([eD()],iV.prototype,"address",void 0),iH([eD()],iV.prototype,"profileName",void 0),iH([eD()],iV.prototype,"charsStart",void 0),iH([eD()],iV.prototype,"charsEnd",void 0),iV=iH([eR("wui-account-button")],iV);var iF=p`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`,iY=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let iK=class extends ef{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),X`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?X`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:X`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};iK.styles=[e_,iF],iY([eD()],iK.prototype,"size",void 0),iY([eD()],iK.prototype,"name",void 0),iY([eD()],iK.prototype,"imageSrc",void 0),iY([eD()],iK.prototype,"walletIcon",void 0),iY([eD({type:Boolean})],iK.prototype,"installed",void 0),iY([eD()],iK.prototype,"badgeSize",void 0),iK=iY([eR("wui-wallet-image")],iK);var iq=p`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,iG=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let iX=class extends ef{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return X`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>X`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${iN(t)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(4-this.walletImages.length)].map(()=>X` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};iX.styles=[e_,iq],iG([eD({type:Array})],iX.prototype,"walletImages",void 0),iX=iG([eR("wui-all-wallets-image")],iX);var iQ=p`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,iJ=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let i0={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},i1={lg:"paragraph-600",md:"small-600"},i2={lg:"md",md:"md"},i3=class extends ef{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;let e=this.textVariant??i1[this.size];return X`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){let e=i2[this.size],t=this.disabled?i0.disabled:i0[this.variant];return X`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return X``}};i3.styles=[e_,eE,iQ],iJ([eD()],i3.prototype,"size",void 0),iJ([eD({type:Boolean})],i3.prototype,"disabled",void 0),iJ([eD({type:Boolean})],i3.prototype,"fullWidth",void 0),iJ([eD({type:Boolean})],i3.prototype,"loading",void 0),iJ([eD()],i3.prototype,"variant",void 0),iJ([eD({type:Boolean})],i3.prototype,"hasIconLeft",void 0),iJ([eD({type:Boolean})],i3.prototype,"hasIconRight",void 0),iJ([eD()],i3.prototype,"borderRadius",void 0),iJ([eD()],i3.prototype,"textVariant",void 0),i3=iJ([eR("wui-button")],i3);let i5=Q`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var i4=p`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }
`,i6=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let i8=class extends ef{constructor(){super(...arguments),this.type="wallet"}render(){return X`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?X` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${i5}`:X`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};i8.styles=[e_,eE,i4],i6([eD()],i8.prototype,"type",void 0),i8=i6([eR("wui-card-select-loader")],i8);let i9=Q`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,i7=Q`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var re=p`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,rt=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ri=class extends ef{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-color-gray-glass-010)"};
      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,X`${this.templateVisual()} ${({sm:i9,md:i5,lg:i7})[this.size]}`}templateVisual(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:X`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};ri.styles=[e_,re],rt([eD()],ri.prototype,"size",void 0),rt([eD()],ri.prototype,"name",void 0),rt([eD()],ri.prototype,"imageSrc",void 0),rt([eD({type:Boolean})],ri.prototype,"selected",void 0),ri=rt([eR("wui-network-image")],ri);var rr=p`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`,ro=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ra=class extends ef{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return X`
      <button data-selected=${iN(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?X`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${iN(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:X`
      <wui-wallet-image
        size="md"
        imageSrc=${iN(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};ra.styles=[e_,eE,rr],ro([eD()],ra.prototype,"name",void 0),ro([eD()],ra.prototype,"type",void 0),ro([eD()],ra.prototype,"imageSrc",void 0),ro([eD({type:Boolean})],ra.prototype,"disabled",void 0),ro([eD({type:Boolean})],ra.prototype,"selected",void 0),ro([eD({type:Boolean})],ra.prototype,"installed",void 0),ra=ro([eR("wui-card-select")],ra);var rn=p`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`,rs=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rl=class extends ef{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){let e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant;return X`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e?"small-600":"paragraph-600"} color="inherit">
          ${this.title?this.title:iI.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?X`<wui-image src=${this.imageSrc}></wui-image>`:null}};rl.styles=[e_,eE,rn],rs([eD()],rl.prototype,"variant",void 0),rs([eD()],rl.prototype,"imageSrc",void 0),rs([eD({type:Boolean})],rl.prototype,"disabled",void 0),rs([eD()],rl.prototype,"icon",void 0),rs([eD()],rl.prototype,"href",void 0),rs([eD()],rl.prototype,"text",void 0),rl=rs([eR("wui-chip")],rl);var rc=p`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,ru=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rd=class extends ef{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return X`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?X`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};rd.styles=[e_,eE,rc],ru([eD()],rd.prototype,"size",void 0),ru([eD({type:Boolean})],rd.prototype,"loading",void 0),rd=ru([eR("wui-connect-button")],rd);var rp=p`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,rh=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rg=class extends ef{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return X`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};rg.styles=[e_,eE,rp],rh([eD({type:Boolean})],rg.prototype,"disabled",void 0),rh([eD()],rg.prototype,"label",void 0),rh([eD()],rg.prototype,"buttonLabel",void 0),rg=rh([eR("wui-cta-button")],rg);var rw=p`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;let rf=class extends ef{render(){return X`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};rf.styles=[e_,eE,rw],rf=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([eR("wui-details-group")],rf);var rm=p`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`,rv=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rb=class extends ef{constructor(){super(...arguments),this.name=""}render(){return X`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};rb.styles=[e_,eE,rm],rv([eD()],rb.prototype,"name",void 0),rb=rv([eR("wui-details-group-item")],rb);var ry=p`
  :host {
    z-index: calc(var(--w3m-z-index) + 1);
    width: 200px;
    padding: var(--wui-spacing-3xs);
    align-items: center;
    display: inherit;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-fg-base-125);
    /* Dark/Elevation/L */
    box-shadow:
      0px 8px 22px -6px rgba(0, 0, 0, 0.12),
      0px 14px 64px -4px rgba(0, 0, 0, 0.12);
  }
`,rx=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rC=class extends ef{constructor(){super(...arguments),this.actions=[],this.isOpen=!1}render(){return this.isOpen?X`
      <wui-flex flexDirection="column" gap="4xs">
        ${this.actions.map(e=>X`
            <wui-list-item
              icon=${e.icon}
              iconSize="sm"
              variant="icon"
              @click=${e.onClick}
            >
              <wui-text variant="small-400" color="fg-100">${e.label}</wui-text>
            </wui-list-item>
          `)}
      </wui-flex>
    `:null}};rC.styles=[e_,eE,ry],rx([eD({type:Array})],rC.prototype,"actions",void 0),rx([eD({type:Boolean})],rC.prototype,"isOpen",void 0),rC=rx([eR("wui-dropdown-menu")],rC);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{I:rk}={M:I,P:O,A:D,C:1,L:eo,R:es,D:z,V:en,I:el,H:ec,N:ed,U:ep,B:eu,F:eh},rT=e=>void 0===e.strings,rS=(e,t)=>{let i=e._$AN;if(void 0===i)return!1;for(let e of i)e._$AO?.(t,!1),rS(e,t);return!0},rA=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===i?.size)},r_=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),rR(t)}};function rE(e){void 0!==this._$AN?(rA(this),this._$AM=e,r_(this)):this._$AM=e}function r$(e,t=!1,i=0){let r=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size){if(t){if(Array.isArray(r))for(let e=i;e<r.length;e++)rS(r[e],!1),rA(r[e]);else null!=r&&(rS(r,!1),rA(r))}else rS(this,e)}}let rR=e=>{e.type==t9.CHILD&&(e._$AP??=r$,e._$AQ??=rE)};class rP extends ie{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),r_(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(rS(this,e),rA(this))}setValue(e){if(rT(this.t))this.t._$AI(e,this);else{let t=[...this.t._$AH];t[this.i]=e,this.t._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rN=()=>new rI;class rI{}let rO=new WeakMap,rD=t7(class extends rP{render(e){return ee}update(e,[t]){let i=t!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),ee}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.Y){let t=this.ht??globalThis,i=rO.get(t);void 0===i&&(i=new WeakMap,rO.set(t,i)),void 0!==i.get(this.Y)&&this.Y.call(this.ht,void 0),i.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?rO.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var rj=p`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,rU=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rB=class extends ef{constructor(){super(...arguments),this.inputElementRef=rN(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){let e=`wui-padding-right-${this.inputRightPadding}`,t=`wui-size-${this.size}`,i={[t]:!0,[e]:!!this.inputRightPadding};return X`${this.templateIcon()}
      <input
        ${rD(this.inputElementRef)}
        class=${it(i)}
        type=${this.type}
        enterkeyhint=${iN(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?X`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};rB.styles=[e_,eE,rj],rU([eD()],rB.prototype,"size",void 0),rU([eD()],rB.prototype,"icon",void 0),rU([eD({type:Boolean})],rB.prototype,"disabled",void 0),rU([eD()],rB.prototype,"placeholder",void 0),rU([eD()],rB.prototype,"type",void 0),rU([eD()],rB.prototype,"keyHint",void 0),rU([eD()],rB.prototype,"value",void 0),rU([eD()],rB.prototype,"inputRightPadding",void 0),rB=rU([eR("wui-input-text")],rB);var rM=p`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,rL=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rz=class extends ef{constructor(){super(...arguments),this.disabled=!1}render(){return X`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?X`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};rz.styles=[e_,rM],rL([eD()],rz.prototype,"errorMessage",void 0),rL([eD({type:Boolean})],rz.prototype,"disabled",void 0),rL([eD()],rz.prototype,"value",void 0),rz=rL([eR("wui-email-input")],rz);var rW=p`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`,rZ=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rH=class extends ef{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return X`
      <wui-input-text
        value=${iN(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testId="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return X`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${eC.bq.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?X`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?X`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};rH.styles=[e_,rW],rZ([eD()],rH.prototype,"errorMessage",void 0),rZ([eD({type:Boolean})],rH.prototype,"disabled",void 0),rZ([eD()],rH.prototype,"value",void 0),rZ([eD({type:Boolean})],rH.prototype,"loading",void 0),rH=rZ([eR("wui-ens-input")],rH);var rV=p`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,rF=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rY=class extends ef{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){let e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",t="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,X`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};rY.styles=[e_,eE,e$,rV],rF([eD()],rY.prototype,"size",void 0),rF([eD({type:Boolean})],rY.prototype,"disabled",void 0),rF([eD()],rY.prototype,"icon",void 0),rF([eD()],rY.prototype,"iconColor",void 0),rY=rF([eR("wui-icon-link")],rY);var rK=p`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`,rq=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rG=class extends ef{constructor(){super(...arguments),this.icon="copy"}render(){return X`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};rG.styles=[e_,eE,rK],rq([eD()],rG.prototype,"icon",void 0),rG=rq([eR("wui-input-element")],rG);var rX=p`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`,rQ=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let rJ=class extends ef{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return X`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};rJ.styles=[e_,eE,rX],rQ([eD({type:Boolean})],rJ.prototype,"disabled",void 0),rQ([eD({type:String})],rJ.prototype,"value",void 0),rJ=rQ([eR("wui-input-numeric")],rJ);var r0=p`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`,r1=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let r2=class extends ef{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};r2.styles=[e_,eE,r0],r1([eD({type:Boolean})],r2.prototype,"disabled",void 0),r1([eD()],r2.prototype,"color",void 0),r2=r1([eR("wui-link")],r2);var r3=p`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,r5=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let r4=class extends ef{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return X`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${iN(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return X`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return X`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",i=this.iconSize?this.iconSize:t;return X`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${i}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?X`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:X``}chevronTemplate(){return this.chevron?X`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};r4.styles=[e_,eE,r3],r5([eD()],r4.prototype,"icon",void 0),r5([eD()],r4.prototype,"iconSize",void 0),r5([eD()],r4.prototype,"variant",void 0),r5([eD()],r4.prototype,"iconVariant",void 0),r5([eD({type:Boolean})],r4.prototype,"disabled",void 0),r5([eD()],r4.prototype,"imageSrc",void 0),r5([eD()],r4.prototype,"alt",void 0),r5([eD({type:Boolean})],r4.prototype,"chevron",void 0),r5([eD({type:Boolean})],r4.prototype,"loading",void 0),r4=r5([eR("wui-list-item")],r4),(ey=ex||(ex={})).approve="approved",ey.bought="bought",ey.borrow="borrowed",ey.burn="burnt",ey.cancel="canceled",ey.claim="claimed",ey.deploy="deployed",ey.deposit="deposited",ey.execute="executed",ey.mint="minted",ey.receive="received",ey.repay="repaid",ey.send="sent",ey.sell="sold",ey.stake="staked",ey.trade="swapped",ey.unstake="unstaked",ey.withdraw="withdrawn";var r6=p`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`,r8=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let r9=class extends ef{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[e,t]=this.images,i=e?.type==="NFT",r=t?.url?"NFT"===t.type:i;return this.style.cssText=`
    --local-left-border-radius: ${i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    --local-right-border-radius: ${r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    `,X`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images,i=e?.type,r=2===this.images.length;return r&&(e?.url||t?.url)?X`<div class="swap-images-container">
        ${e?.url?X`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?X`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?X`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===i?X`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:X`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return(e=this.getIcon(),this.status&&(t=this.getStatusColor()),e)?X`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};r9.styles=[r6],r8([eD()],r9.prototype,"type",void 0),r8([eD()],r9.prototype,"status",void 0),r8([eD()],r9.prototype,"direction",void 0),r8([eD({type:Boolean})],r9.prototype,"onlyDirectionIcon",void 0),r8([eD({type:Array})],r9.prototype,"images",void 0),r8([eD({type:Object})],r9.prototype,"secondImage",void 0),r9=r8([eR("wui-transaction-visual")],r9);var r7=p`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`,oe=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ot=class extends ef{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return X`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${iN(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${iN(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${ex[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?X`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?X`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};ot.styles=[e_,r7],oe([eD()],ot.prototype,"type",void 0),oe([eD({type:Array})],ot.prototype,"descriptions",void 0),oe([eD()],ot.prototype,"date",void 0),oe([eD({type:Boolean})],ot.prototype,"onlyDirectionIcon",void 0),oe([eD()],ot.prototype,"status",void 0),oe([eD()],ot.prototype,"direction",void 0),oe([eD({type:Array})],ot.prototype,"images",void 0),oe([eD({type:Array})],ot.prototype,"price",void 0),oe([eD({type:Array})],ot.prototype,"amount",void 0),oe([eD({type:Array})],ot.prototype,"symbol",void 0),ot=oe([eR("wui-transaction-list-item")],ot);var oi=p`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let or=class extends ef{render(){return X`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};or.styles=[e_,oi],or=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([eR("wui-transaction-list-item-loader")],or);var oo=p`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`,oa=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let on=class extends ef{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let e="md"===this.size?"mini-700":"micro-700";return X`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};on.styles=[e_,oo],oa([eD()],on.prototype,"variant",void 0),oa([eD()],on.prototype,"size",void 0),on=oa([eR("wui-tag")],on);var os=p`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`,ol=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let oc=class extends ef{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?X` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?X` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?X`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:X`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?X`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?X`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};oc.styles=[e_,eE,os],ol([eD({type:Array})],oc.prototype,"walletImages",void 0),ol([eD()],oc.prototype,"imageSrc",void 0),ol([eD()],oc.prototype,"name",void 0),ol([eD()],oc.prototype,"tagLabel",void 0),ol([eD()],oc.prototype,"tagVariant",void 0),ol([eD()],oc.prototype,"icon",void 0),ol([eD()],oc.prototype,"walletIcon",void 0),ol([eD({type:Boolean})],oc.prototype,"installed",void 0),ol([eD({type:Boolean})],oc.prototype,"disabled",void 0),ol([eD({type:Boolean})],oc.prototype,"showAllWallets",void 0),oc=ol([eR("wui-list-wallet")],oc);var ou=p`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,od=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let op=class extends ef{constructor(){super(...arguments),this.logo="google"}render(){return X`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};op.styles=[e_,ou],od([eD()],op.prototype,"logo",void 0),op=od([eR("wui-logo")],op);var oh=p`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,og=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ow=class extends ef{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};ow.styles=[e_,eE,oh],og([eD()],ow.prototype,"logo",void 0),og([eD({type:Boolean})],ow.prototype,"disabled",void 0),ow=og([eR("wui-logo-select")],ow);var of=p`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`,om=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ov=class extends ef{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return X`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?X`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?X`<wui-image src=${this.imageSrc}></wui-image>`:X`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ov.styles=[e_,eE,of],om([eD()],ov.prototype,"imageSrc",void 0),om([eD({type:Boolean})],ov.prototype,"isUnsupportedChain",void 0),om([eD({type:Boolean})],ov.prototype,"disabled",void 0),ov=om([eR("wui-network-button")],ov);var ob=p`
  :host {
    position: relative;
    display: block;
  }
`,oy=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ox=class extends ef{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>{let t=this.values.slice(0,e);return t.every(e=>""!==e)},this.handleKeyDown=(e,t)=>{let i=e.target,r=this.getInputElement(i);if(!r)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let o=r.selectionStart;switch(e.key){case"ArrowLeft":o&&r.setSelectionRange(o+1,o+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===r.value?this.focusInputField("prev",t):this.updateInput(r,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1;if(!this.shouldInputBeEnabled(e))return;let i=this.numerics[e<this.length?e:t],r=i?this.getInputElement(i):void 0;r&&(r.disabled=!1,r.focus())}if("prev"===e){let e=t-1,i=this.numerics[e>-1?e:t],r=i?this.getInputElement(i):void 0;r&&r.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return X`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>X`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @click=${e=>this.selectInput(e)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,i){let r=this.numerics[t],o=e||(r?this.getInputElement(r):void 0);o&&(o.value=i,this.values=this.values.map((e,r)=>r===t?i:e))}selectInput(e){let t=e.target;if(t){let e=this.getInputElement(t);e?.select()}}handleInput(e,t){let i=e.target,r=this.getInputElement(i);if(r){let i=r.value;if("insertFromPaste"===e.inputType)this.handlePaste(r,i,t);else{let o=iI.isNumber(i);o&&e.data?(this.updateInput(r,t,e.data),this.focusInputField("next",t)):this.updateInput(r,t,"")}}this.dispatchInputChangeEvent()}handlePaste(e,t,i){let r=t[0],o=r&&iI.isNumber(r);if(o){this.updateInput(e,i,r);let o=t.substring(1);if(i+1<this.length&&o.length){let e=this.numerics[i+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,o,i+1)}else this.focusInputField("next",i)}else this.updateInput(e,i,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};ox.styles=[e_,ob],oy([eD({type:Number})],ox.prototype,"length",void 0),oy([eD({type:String})],ox.prototype,"otp",void 0),oy([ej()],ox.prototype,"values",void 0),ox=oy([eR("wui-otp")],ox);var oC=i(92592);function ok(e,t,i){return e!==t&&(e-t<0?t-e:e-t)<=i+.1}let oT={generate(e,t,i){let r="#141414",o=[],a=function(e,t){let i=Array.prototype.slice.call(oC.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),r=Math.sqrt(i.length);return i.reduce((e,t,i)=>(i%r==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),n=t/a.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach(({x:e,y:t})=>{let i=(a.length-7)*n*e,l=(a.length-7)*n*t;for(let e=0;e<s.length;e+=1){let t=n*(7-2*e);o.push(Q`
            <rect
              fill=${2===e?r:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${r}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?l+n*e+2.5:l+n*e}
              y= ${0===e?i+n*e+2.5:i+n*e}
            />
          `)}});let l=Math.floor((i+25)/n),c=a.length/2-l/2,u=a.length/2+l/2-1,d=[];a.forEach((e,t)=>{e.forEach((e,i)=>{!a[t][i]||t<7&&i<7||t>a.length-8&&i<7||t<7&&i>a.length-8||t>c&&t<u&&i>c&&i<u||d.push([t*n+n/2,i*n+n/2])})});let p={};return d.forEach(([e,t])=>{p[e]?p[e]?.push(t):p[e]=[t]}),Object.entries(p).map(([e,t])=>{let i=t.filter(e=>t.every(t=>!ok(e,t,n)));return[Number(e),i]}).forEach(([e,t])=>{t.forEach(t=>{o.push(Q`<circle cx=${e} cy=${t} fill=${r} r=${n/2.5} />`)})}),Object.entries(p).filter(([e,t])=>t.length>1).map(([e,t])=>{let i=t.filter(e=>t.some(t=>ok(e,t,n)));return[Number(e),i]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let i=[];for(let e of t){let t=i.find(t=>t.some(t=>ok(e,t,n)));t?t.push(e):i.push([e])}return[e,i.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,i])=>{o.push(Q`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${i}
                stroke=${r}
                stroke-width=${n/1.25}
                stroke-linecap="round"
              />
            `)})}),o}};var oS=p`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,oA=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let o_=class extends ef{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,X`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return Q`
      <svg height=${e} width=${e}>
        ${oT.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?X`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:X`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};o_.styles=[e_,oS],oA([eD()],o_.prototype,"uri",void 0),oA([eD({type:Number})],o_.prototype,"size",void 0),oA([eD()],o_.prototype,"theme",void 0),oA([eD()],o_.prototype,"imageSrc",void 0),oA([eD()],o_.prototype,"alt",void 0),oA([eD({type:Boolean})],o_.prototype,"arenaClear",void 0),oA([eD({type:Boolean})],o_.prototype,"farcaster",void 0),o_=oA([eR("wui-qr-code")],o_);var oE=p`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let o$=class extends ef{constructor(){super(...arguments),this.inputComponentRef=rN()}render(){return X`
      <wui-input-text
        ${rD(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};o$.styles=[e_,oE],o$=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([eR("wui-search-bar")],o$);var oR=p`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`,oP=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let oN=class extends ef{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1}render(){return X`
      ${this.loading?X`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:X`<wui-icon-box
            size="sm"
            iconSize="xs"
            iconColor=${this.iconColor}
            backgroundColor=${this.backgroundColor}
            icon=${this.icon}
            background="opaque"
          ></wui-icon-box>`}
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};oN.styles=[e_,oR],oP([eD()],oN.prototype,"backgroundColor",void 0),oP([eD()],oN.prototype,"iconColor",void 0),oP([eD()],oN.prototype,"icon",void 0),oP([eD()],oN.prototype,"message",void 0),oP([eD()],oN.prototype,"loading",void 0),oN=oP([eR("wui-snackbar")],oN);var oI=p`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,oO=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let oD=class extends ef{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let i=t===this.activeTab;return X`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${i}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?X`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let i=this.buttons[this.activeTab],r=this.buttons[e],o=i?.querySelector("wui-text"),a=r?.querySelector("wui-text"),n=r?.getBoundingClientRect(),s=a?.getBoundingClientRect();i&&o&&!t&&e!==this.activeTab&&(o.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),r&&n&&s&&a&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(n.width+s.width)+6}px`,r.animate([{width:`${n.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};oD.styles=[e_,eE,oI],oO([eD({type:Array})],oD.prototype,"tabs",void 0),oO([eD()],oD.prototype,"onTabChange",void 0),oO([eD({type:Array})],oD.prototype,"buttons",void 0),oO([eD({type:Boolean})],oD.prototype,"disabled",void 0),oO([eD()],oD.prototype,"localTabWidth",void 0),oO([ej()],oD.prototype,"activeTab",void 0),oO([ej()],oD.prototype,"isDense",void 0),oD=oO([eR("wui-tabs")],oD);var oj=p`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`,oU=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let oB=class extends ef{constructor(){super(...arguments),this.text=""}render(){return X`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?X`<wui-image src=${this.imageSrc}></wui-image>`:X`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};oB.styles=[e_,eE,oj],oU([eD()],oB.prototype,"imageSrc",void 0),oU([eD()],oB.prototype,"text",void 0),oB=oU([eR("wui-token-button")],oB);var oM=p`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,oL=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let oz=class extends ef{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,X`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};oz.styles=[e_,eE,oM],oL([eD()],oz.prototype,"placement",void 0),oL([eD()],oz.prototype,"variant",void 0),oL([eD()],oz.prototype,"message",void 0),oz=oL([eR("wui-tooltip")],oz);var oW=p`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`,oZ=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let oH=class extends ef{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){if(!this.visible)return null;let e=this.amount&&this.price?eC.C6.multiply(this.price,this.amount)?.toFixed(3):null;return X`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${e?X`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${iI.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?X`<wui-text variant="small-400" color="fg-200">
                  ${iI.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?X`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?X`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};oH.styles=[e_,eE,oW],oZ([eD()],oH.prototype,"imageSrc",void 0),oZ([eD()],oH.prototype,"name",void 0),oZ([eD()],oH.prototype,"symbol",void 0),oZ([eD()],oH.prototype,"price",void 0),oZ([eD()],oH.prototype,"amount",void 0),oZ([ej()],oH.prototype,"visible",void 0),oZ([ej()],oH.prototype,"imageError",void 0),oH=oZ([eR("wui-token-list-item")],oH);var oV=p`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,oF=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let oY=class extends ef{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,X`${this.templateVisual()}`}templateVisual(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:X`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};oY.styles=[e_,oV],oF([eD()],oY.prototype,"imageSrc",void 0),oF([eD()],oY.prototype,"alt",void 0),oF([eD({type:Boolean})],oY.prototype,"borderRadiusFull",void 0),oY=oF([eR("wui-visual-thumbnail")],oY);var oK=p`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`,oq=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let oG=class extends ef{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return X`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};oG.styles=[e_,eE,oK],oq([eD()],oG.prototype,"label",void 0),oq([eD()],oG.prototype,"description",void 0),oq([eD()],oG.prototype,"icon",void 0),oG=oq([eR("wui-notice-card")],oG);var oX=p`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-150), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`,oQ=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let oJ=class extends ef{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(".heightContent"),t=this.shadowRoot?.querySelector(".textContent");if(e&&t){this.scrollElement=e;let i=t?.scrollHeight;i&&i>100&&(this.enableAccordion=!0,this.scrollHeightElement=i,this.requestUpdate())}})}render(){return X`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||!!this.toggled}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){let e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?X` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};oJ.styles=[e_,eE,oX],oQ([eD()],oJ.prototype,"textTitle",void 0),oQ([eD()],oJ.prototype,"overflowedContent",void 0),oJ=oQ([eR("wui-list-accordion")],oJ);var o0=p`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,o1=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let o2=class extends ef{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return X`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?X` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:X`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};o2.styles=[e_,eE,o0],o1([eD()],o2.prototype,"imageSrc",void 0),o1([eD()],o2.prototype,"textTitle",void 0),o1([eD()],o2.prototype,"textValue",void 0),o2=o1([eR("wui-list-content")],o2);var o3=p`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,o5=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let o4=class extends ef{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.transparent=!1}render(){return X`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        ${this.templateNetworkImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
      </button>
    `}templateNetworkImage(){return this.imageSrc?X`<wui-network-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-network-image>`:this.imageSrc?null:X`<wui-network-image size="sm" name=${this.name}></wui-network-image>`}};o4.styles=[e_,eE,o3],o5([eD()],o4.prototype,"imageSrc",void 0),o5([eD()],o4.prototype,"name",void 0),o5([eD({type:Boolean})],o4.prototype,"disabled",void 0),o5([eD({type:Boolean})],o4.prototype,"transparent",void 0),o4=o5([eR("wui-list-network")],o4);var o6=p`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,o8=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let o9=class extends ef{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return X`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?X`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:X`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};o9.styles=[e_,eE,o6],o8([eD()],o9.prototype,"amount",void 0),o8([eD()],o9.prototype,"networkCurreny",void 0),o8([eD()],o9.prototype,"networkImageUrl",void 0),o8([eD()],o9.prototype,"receiverAddress",void 0),o8([eD()],o9.prototype,"addressExplorerUrl",void 0),o9=o8([eR("wui-list-wallet-transaction")],o9);var o7=p`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-060);
    }
  }
`,ae=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let at=class extends ef{constructor(){super(...arguments),this.text=""}render(){return X`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};at.styles=[e_,eE,o7],ae([eD()],at.prototype,"text",void 0),at=ae([eR("wui-promo")],at);var ai=p`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`,ar=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ao=class extends ef{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return X`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};ao.styles=[e_,ai],ar([eD()],ao.prototype,"dollars",void 0),ar([eD()],ao.prototype,"pennies",void 0),ao=ar([eR("wui-balance")],ao);var aa=p`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,an=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let as=class extends ef{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return X`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${iI.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?X`<wui-image src=${this.networkSrc}></wui-image>`:X`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};as.styles=[e_,eE,aa],an([eD()],as.prototype,"networkSrc",void 0),an([eD()],as.prototype,"avatarSrc",void 0),an([eD()],as.prototype,"profileName",void 0),an([eD()],as.prototype,"address",void 0),an([eD()],as.prototype,"icon",void 0),as=an([eR("wui-profile-button")],as);var al=p`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,ac=i(77548),au=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ad=class extends ef{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail",this.connectedConnector=ac.MO.getConnectedConnector(),this.shouldShowIcon="AUTH"===this.connectedConnector}render(){return X`<button ontouchstart data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.shouldShowIcon?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${iI.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){if(e.target instanceof HTMLElement&&"copy-address"===e.target.id){this.onCopyClick?.(e);return}this.onProfileClick?.(e)}getIconTemplate(e){return X`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};ad.styles=[e_,eE,al],au([eD()],ad.prototype,"avatarSrc",void 0),au([eD()],ad.prototype,"profileName",void 0),au([eD()],ad.prototype,"address",void 0),au([eD()],ad.prototype,"icon",void 0),au([eD()],ad.prototype,"onProfileClick",void 0),au([eD()],ad.prototype,"onCopyClick",void 0),ad=au([eR("wui-profile-button-v2")],ad);var ap=p`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`,ah=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ag=class extends ef{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){let e="sm"===this.size?"small-600":"paragraph-600";return X`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?X`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};ag.styles=[e_,eE,ap],ah([eD()],ag.prototype,"variant",void 0),ah([eD()],ag.prototype,"imageSrc",void 0),ah([eD({type:Boolean})],ag.prototype,"disabled",void 0),ah([eD()],ag.prototype,"icon",void 0),ah([eD()],ag.prototype,"size",void 0),ah([eD()],ag.prototype,"text",void 0),ag=ah([eR("wui-chip-button")],ag);var aw=p`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`,af=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let am=class extends ef{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return X`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){let e=this.networkImages.slice(0,5);return X` <wui-flex class="networks">
      ${e?.map(e=>X` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`)}
    </wui-flex>`}};am.styles=[e_,eE,aw],af([eD({type:Array})],am.prototype,"networkImages",void 0),af([eD()],am.prototype,"text",void 0),am=af([eR("wui-compatible-network")],am);var av=p`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`,ab=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ay=class extends ef{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return X`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};ay.styles=[e_,eE,av],ab([eD()],ay.prototype,"icon",void 0),ab([eD()],ay.prototype,"text",void 0),ay=ab([eR("wui-banner")],ay);var ax=p`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`,aC=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let ak=class extends ef{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return X`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};ak.styles=[e_,eE,ax],aC([eD()],ak.prototype,"imageSrc",void 0),aC([eD()],ak.prototype,"text",void 0),aC([eD()],ak.prototype,"size",void 0),ak=aC([eR("wui-banner-img")],ak);var aT=p`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`,aS=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let aA=class extends ef{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return X`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${iI.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?X`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:X`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};aA.styles=[e_,eE,aT],aS([eD()],aA.prototype,"tokenName",void 0),aS([eD()],aA.prototype,"tokenImageUrl",void 0),aS([eD({type:Number})],aA.prototype,"tokenValue",void 0),aS([eD()],aA.prototype,"tokenAmount",void 0),aS([eD()],aA.prototype,"tokenCurrency",void 0),aS([eD({type:Boolean})],aA.prototype,"clickable",void 0),aA=aS([eR("wui-list-token")],aA);var a_=p`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`,aE=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let a$=class extends ef{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return X`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?X` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:X`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};a$.styles=[e_,eE,a_],aE([eD()],a$.prototype,"icon",void 0),aE([eD()],a$.prototype,"text",void 0),aE([eD()],a$.prototype,"description",void 0),aE([eD()],a$.prototype,"tag",void 0),aE([eD()],a$.prototype,"iconBackgroundColor",void 0),aE([eD()],a$.prototype,"iconColor",void 0),aE([eD({type:Boolean})],a$.prototype,"disabled",void 0),a$=aE([eR("wui-list-description")],a$);var aR=p`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`;let aP=/[.*+?^${}()|[\]\\]/gu,aN=/[0-9,.]/u;var aI=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let aO=class extends ef{constructor(){super(...arguments),this.inputElementRef=rN(),this.disabled=!1,this.value="",this.placeholder="0"}render(){return this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),X`<input
      ${rD(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){let t=e.data;if(t&&this.inputElementRef?.value){if(","===t){let e=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=e,this.value=`${this.value}${e}`}else aN.test(t)||(this.inputElementRef.value.value=this.value.replace(RegExp(t.replace(aP,"\\$&"),"gu"),""))}this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};aO.styles=[e_,eE,aR],aI([eD({type:Boolean})],aO.prototype,"disabled",void 0),aI([eD({type:String})],aO.prototype,"value",void 0),aI([eD({type:String})],aO.prototype,"placeholder",void 0),aO=aI([eR("wui-input-amount")],aO);var aD=p`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`,aj=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let aU=class extends ef{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return X`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?X`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?X`<wui-image src=${this.imageSrc}></wui-image>`:X`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};aU.styles=[e_,eE,aD],aj([eD()],aU.prototype,"text",void 0),aj([eD()],aU.prototype,"address",void 0),aj([eD()],aU.prototype,"imageSrc",void 0),aj([eD({type:Boolean})],aU.prototype,"isAddress",void 0),aU=aj([eR("wui-preview-item")],aU);var aB=p`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`,aM=i(69043),aL=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let az=class extends ef{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.connectedConnector=ac.MO.getConnectedConnector(),this.labels=ac.Ni.state.addressLabels,this.caipNetwork=ac.fB.state.caipNetwork,this.socialProvider=ac.MO.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){super.connectedCallback(),ac.Lr.getBalance(this.accountAddress,this.caipNetwork?.id).then(e=>{let t=this.balance;e.balances.length>0&&(t=e.balances.reduce((e,t)=>e+(t?.value||0),0)),this.balance=t,this.fetchingBalance=!1,this.requestUpdate()})}render(){let e=this.getLabel();return this.shouldShowIcon="AUTH"===this.connectedConnector,X`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?X`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===aM.y_.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:X`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${iI.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${this.fetchingBalance?X`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:X` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
          <slot name="action"></slot>
        </wui-flex>
      </wui-flex>
    `}getLabel(){let e=this.labels?.get(this.accountAddress);return e||"AUTH"!==this.connectedConnector?(e||"INJECTED"!==this.connectedConnector)&&"ANNOUNCED"!==this.connectedConnector?e||(e="EOA"):e="Injected Account":e=`${"eoa"===this.accountType?this.socialProvider??"Email":"Smart"} Account`,e}};az.styles=[e_,eE,aB],aL([eD()],az.prototype,"accountAddress",void 0),aL([eD()],az.prototype,"accountType",void 0),aL([eD({type:Boolean})],az.prototype,"selected",void 0),aL([eD({type:Function})],az.prototype,"onSelect",void 0),az=aL([eR("wui-list-account")],az);var aW=p`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`,aZ=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let aH=class extends ef{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return X`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};aH.styles=[e_,eE,aW],aZ([eD()],aH.prototype,"text",void 0),aZ([eD()],aH.prototype,"icon",void 0),aH=aZ([eR("wui-icon-button")],aH);var aV=p`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`,aF=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let aY=class extends ef{constructor(){super(...arguments),this.text="",this.disabled=!1}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};aY.styles=[e_,eE,aV],aF([eD()],aY.prototype,"text",void 0),aF([eD({type:Boolean})],aY.prototype,"disabled",void 0),aY=aF([eR("wui-list-button")],aY);var aK=p`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`,aq=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let aG=class extends ef{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return"center"===this.align?X` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};aG.styles=[e_,eE,aK],aq([eD()],aG.prototype,"logo",void 0),aq([eD()],aG.prototype,"name",void 0),aq([eD()],aG.prototype,"align",void 0),aq([eD({type:Boolean})],aG.prototype,"disabled",void 0),aG=aq([eR("wui-list-social")],aG);var aX=p`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,aQ=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let aJ=class extends ef{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&iI.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&iI.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&iI.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&iI.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&iI.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&iI.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&iI.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&iI.getSpacingStyles(this.margin,3)};
    `,X`<slot></slot>`}};aJ.styles=[e_,aX],aQ([eD()],aJ.prototype,"gridTemplateRows",void 0),aQ([eD()],aJ.prototype,"gridTemplateColumns",void 0),aQ([eD()],aJ.prototype,"justifyItems",void 0),aQ([eD()],aJ.prototype,"alignItems",void 0),aQ([eD()],aJ.prototype,"justifyContent",void 0),aQ([eD()],aJ.prototype,"alignContent",void 0),aQ([eD()],aJ.prototype,"columnGap",void 0),aQ([eD()],aJ.prototype,"rowGap",void 0),aQ([eD()],aJ.prototype,"gap",void 0),aQ([eD()],aJ.prototype,"padding",void 0),aQ([eD()],aJ.prototype,"margin",void 0),aJ=aQ([eR("wui-grid")],aJ);var a0=p`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`,a1=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let a2=class extends ef{constructor(){super(...arguments),this.text=""}render(){return X`${this.template()}`}template(){return this.text?X`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};a2.styles=[e_,a0],a1([eD()],a2.prototype,"text",void 0),a2=a1([eR("wui-separator")],a2);let a3={interpolate(e,t,i){if(2!==e.length||2!==t.length)throw Error("inputRange and outputRange must be an array of length 2");let r=e[0]||0,o=e[1]||0,a=t[0]||0,n=t[1]||0;return i<r?a:i>o?n:(n-a)/(o-r)*(i-r)+a}},a5=["receive","deposit","borrow","claim"],a4=["withdraw","repay","burn"],a6={getMonthName(e){let t=new Date;return t.setMonth(e),t.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(e,t){let i=eC.Em.getYear(),r=this.getMonthName(t),o=e===i?r:`${r} ${e}`;return o},getTransactionImages(e){let[t,i]=e,r=!!t&&e?.every(e=>!!e.nft_info),o=e?.length>1,a=e?.length===2;return a&&!r?[this.getTransactionImage(t),this.getTransactionImage(i)]:o?e.map(e=>this.getTransactionImage(e)):[this.getTransactionImage(t)]},getTransactionImage:e=>({type:a6.getTransactionTransferTokenType(e),url:a6.getTransactionImageURL(e)}),getTransactionImageURL(e){let t;let i=!!e?.nft_info,r=!!e?.fungible_info;return e&&i?t=e?.nft_info?.content?.preview?.url:e&&r&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":void 0,getTransactionDescriptions(e){let t=e?.metadata?.operationType,i=e?.transfers,r=e?.transfers?.length>0,o=e?.transfers?.length>1,a=r&&i?.every(e=>!!e?.fungible_info),[n,s]=i,l=this.getTransferDescription(n);if(this.getTransferDescription(s),!r)return("send"===t||"receive"===t)&&a?[l=iI.getTruncateString({string:e?.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),iI.getTruncateString({string:e?.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[e.metadata.status];if(o)return i.map(e=>this.getTransferDescription(e));let c="";return a5.includes(t)?c="+":a4.includes(t)&&(c="-"),[l=c.concat(l)]},getTransferDescription(e){let t="";return e&&(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){if(!e)return null;let t=this.getQuantityFixedValue(e?.quantity.numeric),i=[t,e?.fungible_info?.symbol].join(" ").trim();return i},getQuantityFixedValue(e){if(!e)return null;let t=parseFloat(e);return t.toFixed(3)}}},69043:function(e,t,i){"use strict";let r;i.d(t,{$D:function(){return im},y_:function(){return g}});var o,a,n,s,l,c,u,d=i(48764);"undefined"==typeof window||(window.Buffer||(window.Buffer=d.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var p=i(34155);p.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL,p.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL;let h={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",SOCIAL_USERNAME:"SOCIAL_USERNAME",SOCIAL:"@w3m/connected_social",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_CONNECT_SOCIAL:"@w3m-app/CONNECT_SOCIAL",APP_GET_SOCIAL_REDIRECT_URI:"@w3m-app/GET_SOCIAL_REDIRECT_URI",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",APP_CONNECT_FARCASTER:"@w3m-app/CONNECT_FARCASTER",APP_GET_FARCASTER_URI:"@w3m-app/GET_FARCASTER_URI",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_CONNECT_SOCIAL_SUCCESS:"@w3m-frame/CONNECT_SOCIAL_SUCCESS",FRAME_CONNECT_SOCIAL_ERROR:"@w3m-frame/CONNECT_SOCIAL_ERROR",FRAME_CONNECT_FARCASTER_SUCCESS:"@w3m-frame/CONNECT_FARCASTER_SUCCESS",FRAME_CONNECT_FARCASTER_ERROR:"@w3m-frame/CONNECT_FARCASTER_ERROR",FRAME_GET_FARCASTER_URI_SUCCESS:"@w3m-frame/GET_FARCASTER_URI_SUCCESS",FRAME_GET_FARCASTER_URI_ERROR:"@w3m-frame/GET_FARCASTER_URI_ERROR",FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},g={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","wallet_grantPermissions"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}};(o=s||(s={})).assertEqual=e=>e,o.assertIs=function(e){},o.assertNever=function(e){throw Error()},o.arrayToEnum=e=>{let t={};for(let i of e)t[i]=i;return t},o.getValidEnumValues=e=>{let t=o.objectKeys(e).filter(t=>"number"!=typeof e[e[t]]),i={};for(let r of t)i[r]=e[r];return o.objectValues(i)},o.objectValues=e=>o.objectKeys(e).map(function(t){return e[t]}),o.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{let t=[];for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.push(i);return t},o.find=(e,t)=>{for(let i of e)if(t(i))return i},o.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,o.joinValues=function(e,t=" | "){return e.map(e=>"string"==typeof e?`'${e}'`:e).join(t)},o.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t,(l||(l={})).mergeShapes=(e,t)=>({...e,...t});let w=s.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),f=e=>{switch(typeof e){case"undefined":return w.undefined;case"string":return w.string;case"number":return isNaN(e)?w.nan:w.number;case"boolean":return w.boolean;case"function":return w.function;case"bigint":return w.bigint;case"symbol":return w.symbol;case"object":if(Array.isArray(e))return w.array;if(null===e)return w.null;if(e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch)return w.promise;if("undefined"!=typeof Map&&e instanceof Map)return w.map;if("undefined"!=typeof Set&&e instanceof Set)return w.set;if("undefined"!=typeof Date&&e instanceof Date)return w.date;return w.object;default:return w.unknown}},m=s.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),v=e=>{let t=JSON.stringify(e,null,2);return t.replace(/"([^"]+)":/g,"$1:")};class b extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){let t=e||function(e){return e.message},i={_errors:[]},r=e=>{for(let o of e.issues)if("invalid_union"===o.code)o.unionErrors.map(r);else if("invalid_return_type"===o.code)r(o.returnTypeError);else if("invalid_arguments"===o.code)r(o.argumentsError);else if(0===o.path.length)i._errors.push(t(o));else{let e=i,r=0;for(;r<o.path.length;){let i=o.path[r],a=r===o.path.length-1;a?(e[i]=e[i]||{_errors:[]},e[i]._errors.push(t(o))):e[i]=e[i]||{_errors:[]},e=e[i],r++}}};return r(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,s.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=e=>e.message){let t={},i=[];for(let r of this.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):i.push(e(r));return{formErrors:i,fieldErrors:t}}get formErrors(){return this.flatten()}}b.create=e=>{let t=new b(e);return t};let y=(e,t)=>{let i;switch(e.code){case m.invalid_type:i=e.received===w.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case m.invalid_literal:i=`Invalid literal value, expected ${JSON.stringify(e.expected,s.jsonStringifyReplacer)}`;break;case m.unrecognized_keys:i=`Unrecognized key(s) in object: ${s.joinValues(e.keys,", ")}`;break;case m.invalid_union:i="Invalid input";break;case m.invalid_union_discriminator:i=`Invalid discriminator value. Expected ${s.joinValues(e.options)}`;break;case m.invalid_enum_value:i=`Invalid enum value. Expected ${s.joinValues(e.options)}, received '${e.received}'`;break;case m.invalid_arguments:i="Invalid function arguments";break;case m.invalid_return_type:i="Invalid function return type";break;case m.invalid_date:i="Invalid date";break;case m.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(i=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(i=`${i} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?i=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?i=`Invalid input: must end with "${e.validation.endsWith}"`:s.assertNever(e.validation):i="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case m.too_small:i="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case m.too_big:i="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case m.custom:i="Invalid input";break;case m.invalid_intersection_types:i="Intersection results could not be merged";break;case m.not_multiple_of:i=`Number must be a multiple of ${e.multipleOf}`;break;case m.not_finite:i="Number must be finite";break;default:i=t.defaultError,s.assertNever(e)}return{message:i}},x=y,C=e=>{let{data:t,path:i,errorMaps:r,issueData:o}=e,a=[...i,...o.path||[]],n={...o,path:a},s="",l=r.filter(e=>!!e).slice().reverse();for(let e of l)s=e(n,{data:t,defaultError:s}).message;return{...o,path:a,message:o.message||s}};function k(e,t){let i=C({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,x,y].filter(e=>!!e)});e.common.issues.push(i)}class T{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){let i=[];for(let r of t){if("aborted"===r.status)return S;"dirty"===r.status&&e.dirty(),i.push(r.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,t){let i=[];for(let e of t)i.push({key:await e.key,value:await e.value});return T.mergeObjectSync(e,i)}static mergeObjectSync(e,t){let i={};for(let r of t){let{key:t,value:o}=r;if("aborted"===t.status||"aborted"===o.status)return S;"dirty"===t.status&&e.dirty(),"dirty"===o.status&&e.dirty(),"__proto__"!==t.value&&(void 0!==o.value||r.alwaysSet)&&(i[t.value]=o.value)}return{status:e.value,value:i}}}let S=Object.freeze({status:"aborted"}),A=e=>({status:"dirty",value:e}),_=e=>({status:"valid",value:e}),E=e=>"aborted"===e.status,$=e=>"dirty"===e.status,R=e=>"valid"===e.status,P=e=>"undefined"!=typeof Promise&&e instanceof Promise;(a=c||(c={})).errToObj=e=>"string"==typeof e?{message:e}:e||{},a.toString=e=>"string"==typeof e?e:null==e?void 0:e.message;class N{constructor(e,t,i,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=i,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}let I=(e,t)=>{if(R(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let t=new b(e.common.issues);return this._error=t,this._error}}};function O(e){if(!e)return{};let{errorMap:t,invalid_type_error:i,required_error:r,description:o}=e;if(t&&(i||r))throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');if(t)return{errorMap:t,description:o};let a=(e,t)=>"invalid_type"!==e.code?{message:t.defaultError}:void 0===t.data?{message:null!=r?r:t.defaultError}:{message:null!=i?i:t.defaultError};return{errorMap:a,description:o}}class D{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return f(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:f(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new T,ctx:{common:e.parent.common,data:e.data,parsedType:f(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(P(t))throw Error("Synchronous parse encountered promise.");return t}_parseAsync(e){let t=this._parse(e);return Promise.resolve(t)}parse(e,t){let i=this.safeParse(e,t);if(i.success)return i.data;throw i.error}safeParse(e,t){var i;let r={common:{issues:[],async:null!==(i=null==t?void 0:t.async)&&void 0!==i&&i,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:f(e)},o=this._parseSync({data:e,path:r.path,parent:r});return I(r,o)}async parseAsync(e,t){let i=await this.safeParseAsync(e,t);if(i.success)return i.data;throw i.error}async safeParseAsync(e,t){let i={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:f(e)},r=this._parse({data:e,path:i.path,parent:i}),o=await (P(r)?r:Promise.resolve(r));return I(i,o)}refine(e,t){let i=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t;return this._refinement((t,r)=>{let o=e(t),a=()=>r.addIssue({code:m.custom,...i(t)});return"undefined"!=typeof Promise&&o instanceof Promise?o.then(e=>!!e||(a(),!1)):!!o||(a(),!1)})}refinement(e,t){return this._refinement((i,r)=>!!e(i)||(r.addIssue("function"==typeof t?t(i,r):t),!1))}_refinement(e){return new eb({schema:this,typeName:u.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return ey.create(this,this._def)}nullable(){return ex.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ei.create(this,this._def)}promise(){return ev.create(this,this._def)}or(e){return eo.create([this,e],this._def)}and(e){return es.create(this,e,this._def)}transform(e){return new eb({...O(this._def),schema:this,typeName:u.ZodEffects,effect:{type:"transform",transform:e}})}default(e){return new eC({...O(this._def),innerType:this,defaultValue:"function"==typeof e?e:()=>e,typeName:u.ZodDefault})}brand(){return new eA({typeName:u.ZodBranded,type:this,...O(this._def)})}catch(e){return new ek({...O(this._def),innerType:this,catchValue:"function"==typeof e?e:()=>e,typeName:u.ZodCatch})}describe(e){let t=this.constructor;return new t({...this._def,description:e})}pipe(e){return e_.create(this,e)}readonly(){return eE.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}let j=/^c[^\s-]{8,}$/i,U=/^[a-z][a-z0-9]*$/,B=/^[0-9A-HJKMNP-TV-Z]{26}$/,M=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,L=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,z=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,W=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Z=e=>e.precision?e.offset?RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):0===e.precision?e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");class H extends D{_parse(e){let t;this._def.coerce&&(e.data=String(e.data));let i=this._getType(e);if(i!==w.string){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:w.string,received:t.parsedType}),S}let o=new T;for(let i of this._def.checks)if("min"===i.kind)e.data.length<i.value&&(k(t=this._getOrReturnCtx(e,t),{code:m.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),o.dirty());else if("max"===i.kind)e.data.length>i.value&&(k(t=this._getOrReturnCtx(e,t),{code:m.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),o.dirty());else if("length"===i.kind){let r=e.data.length>i.value,a=e.data.length<i.value;(r||a)&&(t=this._getOrReturnCtx(e,t),r?k(t,{code:m.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&k(t,{code:m.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),o.dirty())}else if("email"===i.kind)L.test(e.data)||(k(t=this._getOrReturnCtx(e,t),{validation:"email",code:m.invalid_string,message:i.message}),o.dirty());else if("emoji"===i.kind)r||(r=RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),r.test(e.data)||(k(t=this._getOrReturnCtx(e,t),{validation:"emoji",code:m.invalid_string,message:i.message}),o.dirty());else if("uuid"===i.kind)M.test(e.data)||(k(t=this._getOrReturnCtx(e,t),{validation:"uuid",code:m.invalid_string,message:i.message}),o.dirty());else if("cuid"===i.kind)j.test(e.data)||(k(t=this._getOrReturnCtx(e,t),{validation:"cuid",code:m.invalid_string,message:i.message}),o.dirty());else if("cuid2"===i.kind)U.test(e.data)||(k(t=this._getOrReturnCtx(e,t),{validation:"cuid2",code:m.invalid_string,message:i.message}),o.dirty());else if("ulid"===i.kind)B.test(e.data)||(k(t=this._getOrReturnCtx(e,t),{validation:"ulid",code:m.invalid_string,message:i.message}),o.dirty());else if("url"===i.kind)try{new URL(e.data)}catch(r){k(t=this._getOrReturnCtx(e,t),{validation:"url",code:m.invalid_string,message:i.message}),o.dirty()}else if("regex"===i.kind){i.regex.lastIndex=0;let r=i.regex.test(e.data);r||(k(t=this._getOrReturnCtx(e,t),{validation:"regex",code:m.invalid_string,message:i.message}),o.dirty())}else if("trim"===i.kind)e.data=e.data.trim();else if("includes"===i.kind)e.data.includes(i.value,i.position)||(k(t=this._getOrReturnCtx(e,t),{code:m.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),o.dirty());else if("toLowerCase"===i.kind)e.data=e.data.toLowerCase();else if("toUpperCase"===i.kind)e.data=e.data.toUpperCase();else if("startsWith"===i.kind)e.data.startsWith(i.value)||(k(t=this._getOrReturnCtx(e,t),{code:m.invalid_string,validation:{startsWith:i.value},message:i.message}),o.dirty());else if("endsWith"===i.kind)e.data.endsWith(i.value)||(k(t=this._getOrReturnCtx(e,t),{code:m.invalid_string,validation:{endsWith:i.value},message:i.message}),o.dirty());else if("datetime"===i.kind){let r=Z(i);r.test(e.data)||(k(t=this._getOrReturnCtx(e,t),{code:m.invalid_string,validation:"datetime",message:i.message}),o.dirty())}else if("ip"===i.kind){var a,n;a=e.data,("v4"===(n=i.version)||!n)&&z.test(a)||("v6"===n||!n)&&W.test(a)||(k(t=this._getOrReturnCtx(e,t),{validation:"ip",code:m.invalid_string,message:i.message}),o.dirty())}else s.assertNever(i);return{status:o.value,value:e.data}}_regex(e,t,i){return this.refinement(t=>e.test(t),{validation:t,code:m.invalid_string,...c.errToObj(i)})}_addCheck(e){return new H({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...c.errToObj(e)})}url(e){return this._addCheck({kind:"url",...c.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...c.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...c.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...c.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...c.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...c.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...c.errToObj(e)})}datetime(e){var t;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,...c.errToObj(null==e?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...c.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...c.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...c.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...c.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...c.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...c.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...c.errToObj(t)})}nonempty(e){return this.min(1,c.errToObj(e))}trim(){return new H({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new H({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new H({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>"datetime"===e.kind)}get isEmail(){return!!this._def.checks.find(e=>"email"===e.kind)}get isURL(){return!!this._def.checks.find(e=>"url"===e.kind)}get isEmoji(){return!!this._def.checks.find(e=>"emoji"===e.kind)}get isUUID(){return!!this._def.checks.find(e=>"uuid"===e.kind)}get isCUID(){return!!this._def.checks.find(e=>"cuid"===e.kind)}get isCUID2(){return!!this._def.checks.find(e=>"cuid2"===e.kind)}get isULID(){return!!this._def.checks.find(e=>"ulid"===e.kind)}get isIP(){return!!this._def.checks.find(e=>"ip"===e.kind)}get minLength(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}H.create=e=>{var t;return new H({checks:[],typeName:u.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...O(e)})};class V extends D{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){let t;this._def.coerce&&(e.data=Number(e.data));let i=this._getType(e);if(i!==w.number){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:w.number,received:t.parsedType}),S}let r=new T;for(let i of this._def.checks)if("int"===i.kind)s.isInteger(e.data)||(k(t=this._getOrReturnCtx(e,t),{code:m.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty());else if("min"===i.kind){let o=i.inclusive?e.data<i.value:e.data<=i.value;o&&(k(t=this._getOrReturnCtx(e,t),{code:m.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty())}else if("max"===i.kind){let o=i.inclusive?e.data>i.value:e.data>=i.value;o&&(k(t=this._getOrReturnCtx(e,t),{code:m.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty())}else"multipleOf"===i.kind?0!==function(e,t){let i=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,o=i>r?i:r,a=parseInt(e.toFixed(o).replace(".","")),n=parseInt(t.toFixed(o).replace(".",""));return a%n/Math.pow(10,o)}(e.data,i.value)&&(k(t=this._getOrReturnCtx(e,t),{code:m.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):"finite"===i.kind?Number.isFinite(e.data)||(k(t=this._getOrReturnCtx(e,t),{code:m.not_finite,message:i.message}),r.dirty()):s.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,c.toString(t))}gt(e,t){return this.setLimit("min",e,!1,c.toString(t))}lte(e,t){return this.setLimit("max",e,!0,c.toString(t))}lt(e,t){return this.setLimit("max",e,!1,c.toString(t))}setLimit(e,t,i,r){return new V({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:c.toString(r)}]})}_addCheck(e){return new V({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:c.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:c.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:c.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:c.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:c.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:c.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:c.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:c.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:c.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>"int"===e.kind||"multipleOf"===e.kind&&s.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let i of this._def.checks){if("finite"===i.kind||"int"===i.kind||"multipleOf"===i.kind)return!0;"min"===i.kind?(null===t||i.value>t)&&(t=i.value):"max"===i.kind&&(null===e||i.value<e)&&(e=i.value)}return Number.isFinite(t)&&Number.isFinite(e)}}V.create=e=>new V({checks:[],typeName:u.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...O(e)});class F extends D{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){let t;this._def.coerce&&(e.data=BigInt(e.data));let i=this._getType(e);if(i!==w.bigint){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:w.bigint,received:t.parsedType}),S}let r=new T;for(let i of this._def.checks)if("min"===i.kind){let o=i.inclusive?e.data<i.value:e.data<=i.value;o&&(k(t=this._getOrReturnCtx(e,t),{code:m.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty())}else if("max"===i.kind){let o=i.inclusive?e.data>i.value:e.data>=i.value;o&&(k(t=this._getOrReturnCtx(e,t),{code:m.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty())}else"multipleOf"===i.kind?e.data%i.value!==BigInt(0)&&(k(t=this._getOrReturnCtx(e,t),{code:m.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):s.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,c.toString(t))}gt(e,t){return this.setLimit("min",e,!1,c.toString(t))}lte(e,t){return this.setLimit("max",e,!0,c.toString(t))}lt(e,t){return this.setLimit("max",e,!1,c.toString(t))}setLimit(e,t,i,r){return new F({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:c.toString(r)}]})}_addCheck(e){return new F({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:c.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:c.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:c.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:c.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:c.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}F.create=e=>{var t;return new F({checks:[],typeName:u.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...O(e)})};class Y extends D{_parse(e){this._def.coerce&&(e.data=!!e.data);let t=this._getType(e);if(t!==w.boolean){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:w.boolean,received:t.parsedType}),S}return _(e.data)}}Y.create=e=>new Y({typeName:u.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...O(e)});class K extends D{_parse(e){let t;this._def.coerce&&(e.data=new Date(e.data));let i=this._getType(e);if(i!==w.date){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:w.date,received:t.parsedType}),S}if(isNaN(e.data.getTime())){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_date}),S}let r=new T;for(let i of this._def.checks)"min"===i.kind?e.data.getTime()<i.value&&(k(t=this._getOrReturnCtx(e,t),{code:m.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):"max"===i.kind?e.data.getTime()>i.value&&(k(t=this._getOrReturnCtx(e,t),{code:m.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):s.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new K({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:c.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:c.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}K.create=e=>new K({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:u.ZodDate,...O(e)});class q extends D{_parse(e){let t=this._getType(e);if(t!==w.symbol){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:w.symbol,received:t.parsedType}),S}return _(e.data)}}q.create=e=>new q({typeName:u.ZodSymbol,...O(e)});class G extends D{_parse(e){let t=this._getType(e);if(t!==w.undefined){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:w.undefined,received:t.parsedType}),S}return _(e.data)}}G.create=e=>new G({typeName:u.ZodUndefined,...O(e)});class X extends D{_parse(e){let t=this._getType(e);if(t!==w.null){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:w.null,received:t.parsedType}),S}return _(e.data)}}X.create=e=>new X({typeName:u.ZodNull,...O(e)});class Q extends D{constructor(){super(...arguments),this._any=!0}_parse(e){return _(e.data)}}Q.create=e=>new Q({typeName:u.ZodAny,...O(e)});class J extends D{constructor(){super(...arguments),this._unknown=!0}_parse(e){return _(e.data)}}J.create=e=>new J({typeName:u.ZodUnknown,...O(e)});class ee extends D{_parse(e){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:w.never,received:t.parsedType}),S}}ee.create=e=>new ee({typeName:u.ZodNever,...O(e)});class et extends D{_parse(e){let t=this._getType(e);if(t!==w.undefined){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:w.void,received:t.parsedType}),S}return _(e.data)}}et.create=e=>new et({typeName:u.ZodVoid,...O(e)});class ei extends D{_parse(e){let{ctx:t,status:i}=this._processInputParams(e),r=this._def;if(t.parsedType!==w.array)return k(t,{code:m.invalid_type,expected:w.array,received:t.parsedType}),S;if(null!==r.exactLength){let e=t.data.length>r.exactLength.value,o=t.data.length<r.exactLength.value;(e||o)&&(k(t,{code:e?m.too_big:m.too_small,minimum:o?r.exactLength.value:void 0,maximum:e?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),i.dirty())}if(null!==r.minLength&&t.data.length<r.minLength.value&&(k(t,{code:m.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),i.dirty()),null!==r.maxLength&&t.data.length>r.maxLength.value&&(k(t,{code:m.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),i.dirty()),t.common.async)return Promise.all([...t.data].map((e,i)=>r.type._parseAsync(new N(t,e,t.path,i)))).then(e=>T.mergeArray(i,e));let o=[...t.data].map((e,i)=>r.type._parseSync(new N(t,e,t.path,i)));return T.mergeArray(i,o)}get element(){return this._def.type}min(e,t){return new ei({...this._def,minLength:{value:e,message:c.toString(t)}})}max(e,t){return new ei({...this._def,maxLength:{value:e,message:c.toString(t)}})}length(e,t){return new ei({...this._def,exactLength:{value:e,message:c.toString(t)}})}nonempty(e){return this.min(1,e)}}ei.create=(e,t)=>new ei({type:e,minLength:null,maxLength:null,exactLength:null,typeName:u.ZodArray,...O(t)});class er extends D{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;let e=this._def.shape(),t=s.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){let t=this._getType(e);if(t!==w.object){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:w.object,received:t.parsedType}),S}let{status:i,ctx:r}=this._processInputParams(e),{shape:o,keys:a}=this._getCached(),n=[];if(!(this._def.catchall instanceof ee&&"strip"===this._def.unknownKeys))for(let e in r.data)a.includes(e)||n.push(e);let s=[];for(let e of a){let t=o[e],i=r.data[e];s.push({key:{status:"valid",value:e},value:t._parse(new N(r,i,r.path,e)),alwaysSet:e in r.data})}if(this._def.catchall instanceof ee){let e=this._def.unknownKeys;if("passthrough"===e)for(let e of n)s.push({key:{status:"valid",value:e},value:{status:"valid",value:r.data[e]}});else if("strict"===e)n.length>0&&(k(r,{code:m.unrecognized_keys,keys:n}),i.dirty());else if("strip"===e);else throw Error("Internal ZodObject error: invalid unknownKeys value.")}else{let e=this._def.catchall;for(let t of n){let i=r.data[t];s.push({key:{status:"valid",value:t},value:e._parse(new N(r,i,r.path,t)),alwaysSet:t in r.data})}}return r.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of s){let i=await t.key;e.push({key:i,value:await t.value,alwaysSet:t.alwaysSet})}return e}).then(e=>T.mergeObjectSync(i,e)):T.mergeObjectSync(i,s)}get shape(){return this._def.shape()}strict(e){return c.errToObj,new er({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,i)=>{var r,o,a,n;let s=null!==(a=null===(o=(r=this._def).errorMap)||void 0===o?void 0:o.call(r,t,i).message)&&void 0!==a?a:i.defaultError;return"unrecognized_keys"===t.code?{message:null!==(n=c.errToObj(e).message)&&void 0!==n?n:s}:{message:s}}}:{}})}strip(){return new er({...this._def,unknownKeys:"strip"})}passthrough(){return new er({...this._def,unknownKeys:"passthrough"})}extend(e){return new er({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){let t=new er({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:u.ZodObject});return t}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new er({...this._def,catchall:e})}pick(e){let t={};return s.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(t[i]=this.shape[i])}),new er({...this._def,shape:()=>t})}omit(e){let t={};return s.objectKeys(this.shape).forEach(i=>{e[i]||(t[i]=this.shape[i])}),new er({...this._def,shape:()=>t})}deepPartial(){return function e(t){if(t instanceof er){let i={};for(let r in t.shape){let o=t.shape[r];i[r]=ey.create(e(o))}return new er({...t._def,shape:()=>i})}return t instanceof ei?new ei({...t._def,type:e(t.element)}):t instanceof ey?ey.create(e(t.unwrap())):t instanceof ex?ex.create(e(t.unwrap())):t instanceof el?el.create(t.items.map(t=>e(t))):t}(this)}partial(e){let t={};return s.objectKeys(this.shape).forEach(i=>{let r=this.shape[i];e&&!e[i]?t[i]=r:t[i]=r.optional()}),new er({...this._def,shape:()=>t})}required(e){let t={};return s.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])t[i]=this.shape[i];else{let e=this.shape[i],r=e;for(;r instanceof ey;)r=r._def.innerType;t[i]=r}}),new er({...this._def,shape:()=>t})}keyof(){return ew(s.objectKeys(this.shape))}}er.create=(e,t)=>new er({shape:()=>e,unknownKeys:"strip",catchall:ee.create(),typeName:u.ZodObject,...O(t)}),er.strictCreate=(e,t)=>new er({shape:()=>e,unknownKeys:"strict",catchall:ee.create(),typeName:u.ZodObject,...O(t)}),er.lazycreate=(e,t)=>new er({shape:e,unknownKeys:"strip",catchall:ee.create(),typeName:u.ZodObject,...O(t)});class eo extends D{_parse(e){let{ctx:t}=this._processInputParams(e),i=this._def.options;if(t.common.async)return Promise.all(i.map(async e=>{let i={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:i}),ctx:i}})).then(function(e){for(let t of e)if("valid"===t.result.status)return t.result;for(let i of e)if("dirty"===i.result.status)return t.common.issues.push(...i.ctx.common.issues),i.result;let i=e.map(e=>new b(e.ctx.common.issues));return k(t,{code:m.invalid_union,unionErrors:i}),S});{let e;let r=[];for(let o of i){let i={...t,common:{...t.common,issues:[]},parent:null},a=o._parseSync({data:t.data,path:t.path,parent:i});if("valid"===a.status)return a;"dirty"!==a.status||e||(e={result:a,ctx:i}),i.common.issues.length&&r.push(i.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let o=r.map(e=>new b(e));return k(t,{code:m.invalid_union,unionErrors:o}),S}}get options(){return this._def.options}}eo.create=(e,t)=>new eo({options:e,typeName:u.ZodUnion,...O(t)});let ea=e=>{if(e instanceof eh)return ea(e.schema);if(e instanceof eb)return ea(e.innerType());if(e instanceof eg)return[e.value];if(e instanceof ef)return e.options;if(e instanceof em)return Object.keys(e.enum);if(e instanceof eC)return ea(e._def.innerType);if(e instanceof G)return[void 0];else if(e instanceof X)return[null];else return null};class en extends D{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==w.object)return k(t,{code:m.invalid_type,expected:w.object,received:t.parsedType}),S;let i=this.discriminator,r=t.data[i],o=this.optionsMap.get(r);return o?t.common.async?o._parseAsync({data:t.data,path:t.path,parent:t}):o._parseSync({data:t.data,path:t.path,parent:t}):(k(t,{code:m.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),S)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,i){let r=new Map;for(let i of t){let t=ea(i.shape[e]);if(!t)throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let o of t){if(r.has(o))throw Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);r.set(o,i)}}return new en({typeName:u.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:r,...O(i)})}}class es extends D{_parse(e){let{status:t,ctx:i}=this._processInputParams(e),r=(e,r)=>{if(E(e)||E(r))return S;let o=function e(t,i){let r=f(t),o=f(i);if(t===i)return{valid:!0,data:t};if(r===w.object&&o===w.object){let r=s.objectKeys(i),o=s.objectKeys(t).filter(e=>-1!==r.indexOf(e)),a={...t,...i};for(let r of o){let o=e(t[r],i[r]);if(!o.valid)return{valid:!1};a[r]=o.data}return{valid:!0,data:a}}if(r===w.array&&o===w.array){if(t.length!==i.length)return{valid:!1};let r=[];for(let o=0;o<t.length;o++){let a=t[o],n=i[o],s=e(a,n);if(!s.valid)return{valid:!1};r.push(s.data)}return{valid:!0,data:r}}return r===w.date&&o===w.date&&+t==+i?{valid:!0,data:t}:{valid:!1}}(e.value,r.value);return o.valid?(($(e)||$(r))&&t.dirty(),{status:t.value,value:o.data}):(k(i,{code:m.invalid_intersection_types}),S)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([e,t])=>r(e,t)):r(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}es.create=(e,t,i)=>new es({left:e,right:t,typeName:u.ZodIntersection,...O(i)});class el extends D{_parse(e){let{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==w.array)return k(i,{code:m.invalid_type,expected:w.array,received:i.parsedType}),S;if(i.data.length<this._def.items.length)return k(i,{code:m.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),S;let r=this._def.rest;!r&&i.data.length>this._def.items.length&&(k(i,{code:m.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());let o=[...i.data].map((e,t)=>{let r=this._def.items[t]||this._def.rest;return r?r._parse(new N(i,e,i.path,t)):null}).filter(e=>!!e);return i.common.async?Promise.all(o).then(e=>T.mergeArray(t,e)):T.mergeArray(t,o)}get items(){return this._def.items}rest(e){return new el({...this._def,rest:e})}}el.create=(e,t)=>{if(!Array.isArray(e))throw Error("You must pass an array of schemas to z.tuple([ ... ])");return new el({items:e,typeName:u.ZodTuple,rest:null,...O(t)})};class ec extends D{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==w.object)return k(i,{code:m.invalid_type,expected:w.object,received:i.parsedType}),S;let r=[],o=this._def.keyType,a=this._def.valueType;for(let e in i.data)r.push({key:o._parse(new N(i,e,i.path,e)),value:a._parse(new N(i,i.data[e],i.path,e))});return i.common.async?T.mergeObjectAsync(t,r):T.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(e,t,i){return new ec(t instanceof D?{keyType:e,valueType:t,typeName:u.ZodRecord,...O(i)}:{keyType:H.create(),valueType:e,typeName:u.ZodRecord,...O(t)})}}class eu extends D{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==w.map)return k(i,{code:m.invalid_type,expected:w.map,received:i.parsedType}),S;let r=this._def.keyType,o=this._def.valueType,a=[...i.data.entries()].map(([e,t],a)=>({key:r._parse(new N(i,e,i.path,[a,"key"])),value:o._parse(new N(i,t,i.path,[a,"value"]))}));if(i.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let i of a){let r=await i.key,o=await i.value;if("aborted"===r.status||"aborted"===o.status)return S;("dirty"===r.status||"dirty"===o.status)&&t.dirty(),e.set(r.value,o.value)}return{status:t.value,value:e}})}{let e=new Map;for(let i of a){let r=i.key,o=i.value;if("aborted"===r.status||"aborted"===o.status)return S;("dirty"===r.status||"dirty"===o.status)&&t.dirty(),e.set(r.value,o.value)}return{status:t.value,value:e}}}}eu.create=(e,t,i)=>new eu({valueType:t,keyType:e,typeName:u.ZodMap,...O(i)});class ed extends D{_parse(e){let{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==w.set)return k(i,{code:m.invalid_type,expected:w.set,received:i.parsedType}),S;let r=this._def;null!==r.minSize&&i.data.size<r.minSize.value&&(k(i,{code:m.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),null!==r.maxSize&&i.data.size>r.maxSize.value&&(k(i,{code:m.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());let o=this._def.valueType;function a(e){let i=new Set;for(let r of e){if("aborted"===r.status)return S;"dirty"===r.status&&t.dirty(),i.add(r.value)}return{status:t.value,value:i}}let n=[...i.data.values()].map((e,t)=>o._parse(new N(i,e,i.path,t)));return i.common.async?Promise.all(n).then(e=>a(e)):a(n)}min(e,t){return new ed({...this._def,minSize:{value:e,message:c.toString(t)}})}max(e,t){return new ed({...this._def,maxSize:{value:e,message:c.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}ed.create=(e,t)=>new ed({valueType:e,minSize:null,maxSize:null,typeName:u.ZodSet,...O(t)});class ep extends D{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==w.function)return k(t,{code:m.invalid_type,expected:w.function,received:t.parsedType}),S;function i(e,i){return C({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,x,y].filter(e=>!!e),issueData:{code:m.invalid_arguments,argumentsError:i}})}function r(e,i){return C({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,x,y].filter(e=>!!e),issueData:{code:m.invalid_return_type,returnTypeError:i}})}let o={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof ev){let e=this;return _(async function(...t){let n=new b([]),s=await e._def.args.parseAsync(t,o).catch(e=>{throw n.addIssue(i(t,e)),n}),l=await Reflect.apply(a,this,s),c=await e._def.returns._def.type.parseAsync(l,o).catch(e=>{throw n.addIssue(r(l,e)),n});return c})}{let e=this;return _(function(...t){let n=e._def.args.safeParse(t,o);if(!n.success)throw new b([i(t,n.error)]);let s=Reflect.apply(a,this,n.data),l=e._def.returns.safeParse(s,o);if(!l.success)throw new b([r(s,l.error)]);return l.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new ep({...this._def,args:el.create(e).rest(J.create())})}returns(e){return new ep({...this._def,returns:e})}implement(e){let t=this.parse(e);return t}strictImplement(e){let t=this.parse(e);return t}static create(e,t,i){return new ep({args:e||el.create([]).rest(J.create()),returns:t||J.create(),typeName:u.ZodFunction,...O(i)})}}class eh extends D{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e),i=this._def.getter();return i._parse({data:t.data,path:t.path,parent:t})}}eh.create=(e,t)=>new eh({getter:e,typeName:u.ZodLazy,...O(t)});class eg extends D{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return k(t,{received:t.data,code:m.invalid_literal,expected:this._def.value}),S}return{status:"valid",value:e.data}}get value(){return this._def.value}}function ew(e,t){return new ef({values:e,typeName:u.ZodEnum,...O(t)})}eg.create=(e,t)=>new eg({value:e,typeName:u.ZodLiteral,...O(t)});class ef extends D{_parse(e){if("string"!=typeof e.data){let t=this._getOrReturnCtx(e),i=this._def.values;return k(t,{expected:s.joinValues(i),received:t.parsedType,code:m.invalid_type}),S}if(-1===this._def.values.indexOf(e.data)){let t=this._getOrReturnCtx(e),i=this._def.values;return k(t,{received:t.data,code:m.invalid_enum_value,options:i}),S}return _(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(e){return ef.create(e)}exclude(e){return ef.create(this.options.filter(t=>!e.includes(t)))}}ef.create=ew;class em extends D{_parse(e){let t=s.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==w.string&&i.parsedType!==w.number){let e=s.objectValues(t);return k(i,{expected:s.joinValues(e),received:i.parsedType,code:m.invalid_type}),S}if(-1===t.indexOf(e.data)){let e=s.objectValues(t);return k(i,{received:i.data,code:m.invalid_enum_value,options:e}),S}return _(e.data)}get enum(){return this._def.values}}em.create=(e,t)=>new em({values:e,typeName:u.ZodNativeEnum,...O(t)});class ev extends D{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==w.promise&&!1===t.common.async)return k(t,{code:m.invalid_type,expected:w.promise,received:t.parsedType}),S;let i=t.parsedType===w.promise?t.data:Promise.resolve(t.data);return _(i.then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}}ev.create=(e,t)=>new ev({type:e,typeName:u.ZodPromise,...O(t)});class eb extends D{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===u.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:i}=this._processInputParams(e),r=this._def.effect||null,o={addIssue:e=>{k(i,e),e.fatal?t.abort():t.dirty()},get path(){return i.path}};if(o.addIssue=o.addIssue.bind(o),"preprocess"===r.type){let e=r.transform(i.data,o);return i.common.issues.length?{status:"dirty",value:i.data}:i.common.async?Promise.resolve(e).then(e=>this._def.schema._parseAsync({data:e,path:i.path,parent:i})):this._def.schema._parseSync({data:e,path:i.path,parent:i})}if("refinement"===r.type){let e=e=>{let t=r.refinement(e,o);if(i.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1!==i.common.async)return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(i=>"aborted"===i.status?S:("dirty"===i.status&&t.dirty(),e(i.value).then(()=>({status:t.value,value:i.value}))));{let r=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return"aborted"===r.status?S:("dirty"===r.status&&t.dirty(),e(r.value),{status:t.value,value:r.value})}}if("transform"===r.type){if(!1!==i.common.async)return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(e=>R(e)?Promise.resolve(r.transform(e.value,o)).then(e=>({status:t.value,value:e})):e);{let e=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!R(e))return e;let a=r.transform(e.value,o);if(a instanceof Promise)throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:a}}}s.assertNever(r)}}eb.create=(e,t,i)=>new eb({schema:e,typeName:u.ZodEffects,effect:t,...O(i)}),eb.createWithPreprocess=(e,t,i)=>new eb({schema:t,effect:{type:"preprocess",transform:e},typeName:u.ZodEffects,...O(i)});class ey extends D{_parse(e){let t=this._getType(e);return t===w.undefined?_(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ey.create=(e,t)=>new ey({innerType:e,typeName:u.ZodOptional,...O(t)});class ex extends D{_parse(e){let t=this._getType(e);return t===w.null?_(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ex.create=(e,t)=>new ex({innerType:e,typeName:u.ZodNullable,...O(t)});class eC extends D{_parse(e){let{ctx:t}=this._processInputParams(e),i=t.data;return t.parsedType===w.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}eC.create=(e,t)=>new eC({innerType:e,typeName:u.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...O(t)});class ek extends D{_parse(e){let{ctx:t}=this._processInputParams(e),i={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return P(r)?r.then(e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new b(i.common.issues)},input:i.data})})):{status:"valid",value:"valid"===r.status?r.value:this._def.catchValue({get error(){return new b(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}ek.create=(e,t)=>new ek({innerType:e,typeName:u.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...O(t)});class eT extends D{_parse(e){let t=this._getType(e);if(t!==w.nan){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:w.nan,received:t.parsedType}),S}return{status:"valid",value:e.data}}}eT.create=e=>new eT({typeName:u.ZodNaN,...O(e)});let eS=Symbol("zod_brand");class eA extends D{_parse(e){let{ctx:t}=this._processInputParams(e),i=t.data;return this._def.type._parse({data:i,path:t.path,parent:t})}unwrap(){return this._def.type}}class e_ extends D{_parse(e){let{status:t,ctx:i}=this._processInputParams(e);if(i.common.async){let e=async()=>{let e=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return"aborted"===e.status?S:"dirty"===e.status?(t.dirty(),A(e.value)):this._def.out._parseAsync({data:e.value,path:i.path,parent:i})};return e()}{let e=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return"aborted"===e.status?S:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:i.path,parent:i})}}static create(e,t){return new e_({in:e,out:t,typeName:u.ZodPipeline})}}class eE extends D{_parse(e){let t=this._def.innerType._parse(e);return R(t)&&(t.value=Object.freeze(t.value)),t}}eE.create=(e,t)=>new eE({innerType:e,typeName:u.ZodReadonly,...O(t)});let e$=(e,t={},i)=>e?Q.create().superRefine((r,o)=>{var a,n;if(!e(r)){let e="function"==typeof t?t(r):"string"==typeof t?{message:t}:t,s=null===(n=null!==(a=e.fatal)&&void 0!==a?a:i)||void 0===n||n;o.addIssue({code:"custom",..."string"==typeof e?{message:e}:e,fatal:s})}}):Q.create(),eR={object:er.lazycreate};(n=u||(u={})).ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly";let eP=(e,t={message:`Input not instance of ${e.name}`})=>e$(t=>t instanceof e,t),eN=H.create,eI=V.create,eO=eT.create,eD=F.create,ej=Y.create,eU=K.create,eB=q.create,eM=G.create,eL=X.create,ez=Q.create,eW=J.create,eZ=ee.create,eH=et.create,eV=ei.create,eF=er.create,eY=er.strictCreate,eK=eo.create,eq=en.create,eG=es.create,eX=el.create,eQ=ec.create,eJ=eu.create,e0=ed.create,e1=ep.create,e2=eh.create,e3=eg.create,e5=ef.create,e4=em.create,e6=ev.create,e8=eb.create,e9=ey.create,e7=ex.create,te=eb.createWithPreprocess,tt=e_.create,ti=()=>eN().optional(),tr=()=>eI().optional(),to=()=>ej().optional();var ta=Object.freeze({__proto__:null,defaultErrorMap:y,setErrorMap:function(e){x=e},getErrorMap:function(){return x},makeIssue:C,EMPTY_PATH:[],addIssueToContext:k,ParseStatus:T,INVALID:S,DIRTY:A,OK:_,isAborted:E,isDirty:$,isValid:R,isAsync:P,get util(){return s},get objectUtil(){return l},ZodParsedType:w,getParsedType:f,ZodType:D,ZodString:H,ZodNumber:V,ZodBigInt:F,ZodBoolean:Y,ZodDate:K,ZodSymbol:q,ZodUndefined:G,ZodNull:X,ZodAny:Q,ZodUnknown:J,ZodNever:ee,ZodVoid:et,ZodArray:ei,ZodObject:er,ZodUnion:eo,ZodDiscriminatedUnion:en,ZodIntersection:es,ZodTuple:el,ZodRecord:ec,ZodMap:eu,ZodSet:ed,ZodFunction:ep,ZodLazy:eh,ZodLiteral:eg,ZodEnum:ef,ZodNativeEnum:em,ZodPromise:ev,ZodEffects:eb,ZodTransformer:eb,ZodOptional:ey,ZodNullable:ex,ZodDefault:eC,ZodCatch:ek,ZodNaN:eT,BRAND:eS,ZodBranded:eA,ZodPipeline:e_,ZodReadonly:eE,custom:e$,Schema:D,ZodSchema:D,late:eR,get ZodFirstPartyTypeKind(){return u},coerce:{string:e=>H.create({...e,coerce:!0}),number:e=>V.create({...e,coerce:!0}),boolean:e=>Y.create({...e,coerce:!0}),bigint:e=>F.create({...e,coerce:!0}),date:e=>K.create({...e,coerce:!0})},any:ez,array:eV,bigint:eD,boolean:ej,date:eU,discriminatedUnion:eq,effect:e8,enum:e5,function:e1,instanceof:eP,intersection:eG,lazy:e2,literal:e3,map:eJ,nan:eO,nativeEnum:e4,never:eZ,null:eL,nullable:e7,number:eI,object:eF,oboolean:to,onumber:tr,optional:e9,ostring:ti,pipeline:tt,preprocess:te,promise:e6,record:eQ,set:e0,strictObject:eY,string:eN,symbol:eB,transformer:e8,tuple:eX,undefined:eM,union:eK,unknown:eW,void:eH,NEVER:S,ZodIssueCode:m,quotelessJson:v,ZodError:b});let tn=ta.object({message:ta.string()});function ts(e){return ta.literal(h[e])}ta.object({accessList:ta.array(ta.string()),blockHash:ta.string().nullable(),blockNumber:ta.string().nullable(),chainId:ta.string(),from:ta.string(),gas:ta.string(),hash:ta.string(),input:ta.string().nullable(),maxFeePerGas:ta.string(),maxPriorityFeePerGas:ta.string(),nonce:ta.string(),r:ta.string(),s:ta.string(),to:ta.string(),transactionIndex:ta.string().nullable(),type:ta.string(),v:ta.string(),value:ta.string()});let tl=ta.object({chainId:ta.number()}),tc=ta.object({email:ta.string().email()}),tu=ta.object({otp:ta.string()}),td=ta.object({uri:ta.string()}),tp=ta.object({chainId:ta.optional(ta.number()),preferredAccountType:ta.optional(ta.string())}),th=ta.object({provider:ta.enum(["google","github","apple","facebook","x","discord"])}),tg=ta.object({email:ta.string().email()}),tw=ta.object({otp:ta.string()}),tf=ta.object({otp:ta.string()}),tm=ta.object({themeMode:ta.optional(ta.enum(["light","dark"])),themeVariables:ta.optional(ta.record(ta.string(),ta.string().or(ta.number()))),w3mThemeVariables:ta.optional(ta.record(ta.string(),ta.string()))}),tv=ta.object({metadata:ta.object({name:ta.string(),description:ta.string(),url:ta.string(),icons:ta.array(ta.string())}).optional(),sdkVersion:ta.string(),projectId:ta.string()}),tb=ta.object({type:ta.string()}),ty=ta.object({action:ta.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),tx=ta.object({url:ta.string()}),tC=ta.object({userName:ta.string()}),tk=ta.object({email:ta.string(),address:ta.string(),chainId:ta.number(),accounts:ta.array(ta.object({address:ta.string(),type:ta.enum([g.ACCOUNT_TYPES.EOA,g.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),userName:ta.string().optional()}),tT=ta.object({action:ta.enum(["VERIFY_PRIMARY_OTP","VERIFY_SECONDARY_OTP"])}),tS=ta.object({email:ta.string().email().optional().nullable(),address:ta.string(),chainId:ta.number(),smartAccountDeployed:ta.optional(ta.boolean()),accounts:ta.array(ta.object({address:ta.string(),type:ta.enum([g.ACCOUNT_TYPES.EOA,g.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),preferredAccountType:ta.optional(ta.string())}),tA=ta.object({uri:ta.string()}),t_=ta.object({isConnected:ta.boolean()}),tE=ta.object({chainId:ta.number()}),t$=ta.object({chainId:ta.number()}),tR=ta.object({newEmail:ta.string().email()}),tP=ta.object({smartAccountEnabledNetworks:ta.array(ta.number())});ta.object({address:ta.string(),isDeployed:ta.boolean()});let tN=ta.object({type:ta.string(),address:ta.string()}),tI=ta.any(),tO=ta.object({method:ta.literal("eth_accounts")}),tD=ta.object({method:ta.literal("eth_blockNumber")}),tj=ta.object({method:ta.literal("eth_call"),params:ta.array(ta.any())}),tU=ta.object({method:ta.literal("eth_chainId")}),tB=ta.object({method:ta.literal("eth_estimateGas"),params:ta.array(ta.any())}),tM=ta.object({method:ta.literal("eth_feeHistory"),params:ta.array(ta.any())}),tL=ta.object({method:ta.literal("eth_gasPrice")}),tz=ta.object({method:ta.literal("eth_getAccount"),params:ta.array(ta.any())}),tW=ta.object({method:ta.literal("eth_getBalance"),params:ta.array(ta.any())}),tZ=ta.object({method:ta.literal("eth_getBlockByHash"),params:ta.array(ta.any())}),tH=ta.object({method:ta.literal("eth_getBlockByNumber"),params:ta.array(ta.any())}),tV=ta.object({method:ta.literal("eth_getBlockReceipts"),params:ta.array(ta.any())}),tF=ta.object({method:ta.literal("eth_getBlockTransactionCountByHash"),params:ta.array(ta.any())}),tY=ta.object({method:ta.literal("eth_getBlockTransactionCountByNumber"),params:ta.array(ta.any())}),tK=ta.object({method:ta.literal("eth_getCode"),params:ta.array(ta.any())}),tq=ta.object({method:ta.literal("eth_getFilterChanges"),params:ta.array(ta.any())}),tG=ta.object({method:ta.literal("eth_getFilterLogs"),params:ta.array(ta.any())}),tX=ta.object({method:ta.literal("eth_getLogs"),params:ta.array(ta.any())}),tQ=ta.object({method:ta.literal("eth_getProof"),params:ta.array(ta.any())}),tJ=ta.object({method:ta.literal("eth_getStorageAt"),params:ta.array(ta.any())}),t0=ta.object({method:ta.literal("eth_getTransactionByBlockHashAndIndex"),params:ta.array(ta.any())}),t1=ta.object({method:ta.literal("eth_getTransactionByBlockNumberAndIndex"),params:ta.array(ta.any())}),t2=ta.object({method:ta.literal("eth_getTransactionByHash"),params:ta.array(ta.any())}),t3=ta.object({method:ta.literal("eth_getTransactionCount"),params:ta.array(ta.any())}),t5=ta.object({method:ta.literal("eth_getTransactionReceipt"),params:ta.array(ta.any())}),t4=ta.object({method:ta.literal("eth_getUncleCountByBlockHash"),params:ta.array(ta.any())}),t6=ta.object({method:ta.literal("eth_getUncleCountByBlockNumber"),params:ta.array(ta.any())}),t8=ta.object({method:ta.literal("eth_maxPriorityFeePerGas")}),t9=ta.object({method:ta.literal("eth_newBlockFilter")}),t7=ta.object({method:ta.literal("eth_newFilter"),params:ta.array(ta.any())}),ie=ta.object({method:ta.literal("eth_newPendingTransactionFilter")}),it=ta.object({method:ta.literal("eth_sendRawTransaction"),params:ta.array(ta.any())}),ii=ta.object({method:ta.literal("eth_syncing"),params:ta.array(ta.any())}),ir=ta.object({method:ta.literal("eth_uninstallFilter"),params:ta.array(ta.any())}),io=ta.object({method:ta.literal("personal_sign"),params:ta.array(ta.any())}),ia=ta.object({method:ta.literal("eth_signTypedData_v4"),params:ta.array(ta.any())}),is=ta.object({method:ta.literal("eth_sendTransaction"),params:ta.array(ta.any())}),il=ta.object({method:ta.literal("wallet_sendCalls"),params:ta.array(ta.object({chainId:ta.string().optional(),from:ta.string().optional(),version:ta.string().optional(),capabilities:ta.any().optional(),calls:ta.array(ta.object({to:ta.string().startsWith("0x"),data:ta.string().startsWith("0x").optional(),value:ta.string().optional()}))}))}),ic=ta.object({method:ta.literal("wallet_getCallsStatus"),params:ta.array(ta.string())}),iu=ta.object({method:ta.literal("wallet_getCapabilities")}),id=ta.object({method:ta.literal("wallet_grantPermissions"),params:ta.array(ta.any())}),ip=ta.object({token:ta.string()}),ih=ta.object({id:ta.string().optional()});ih.extend({type:ts("APP_SWITCH_NETWORK"),payload:tl}).or(ih.extend({type:ts("APP_CONNECT_EMAIL"),payload:tc})).or(ih.extend({type:ts("APP_CONNECT_DEVICE")})).or(ih.extend({type:ts("APP_CONNECT_OTP"),payload:tu})).or(ih.extend({type:ts("APP_CONNECT_SOCIAL"),payload:td})).or(ih.extend({type:ts("APP_GET_FARCASTER_URI")})).or(ih.extend({type:ts("APP_CONNECT_FARCASTER")})).or(ih.extend({type:ts("APP_GET_USER"),payload:ta.optional(tp)})).or(ih.extend({type:ts("APP_GET_SOCIAL_REDIRECT_URI"),payload:th})).or(ih.extend({type:ts("APP_SIGN_OUT")})).or(ih.extend({type:ts("APP_IS_CONNECTED"),payload:ta.optional(ip)})).or(ih.extend({type:ts("APP_GET_CHAIN_ID")})).or(ih.extend({type:ts("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(ih.extend({type:ts("APP_INIT_SMART_ACCOUNT")})).or(ih.extend({type:ts("APP_SET_PREFERRED_ACCOUNT"),payload:tb})).or(ih.extend({type:ts("APP_RPC_REQUEST"),payload:io.or(is).or(tO).or(tD).or(tj).or(tU).or(tB).or(tM).or(tL).or(tz).or(tW).or(tZ).or(tH).or(tV).or(tF).or(tY).or(tK).or(tq).or(tG).or(tX).or(tQ).or(tJ).or(t0).or(t1).or(t2).or(t3).or(t5).or(t4).or(t6).or(t8).or(t9).or(t7).or(ie).or(it).or(ii).or(ir).or(io).or(ia).or(is).or(ic).or(il).or(iu).or(id)})).or(ih.extend({type:ts("APP_UPDATE_EMAIL"),payload:tg})).or(ih.extend({type:ts("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:tw})).or(ih.extend({type:ts("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:tf})).or(ih.extend({type:ts("APP_SYNC_THEME"),payload:tm})).or(ih.extend({type:ts("APP_SYNC_DAPP_DATA"),payload:tv})),ih.extend({type:ts("FRAME_SWITCH_NETWORK_ERROR"),payload:tn}).or(ih.extend({type:ts("FRAME_SWITCH_NETWORK_SUCCESS"),payload:t$})).or(ih.extend({type:ts("FRAME_CONNECT_EMAIL_SUCCESS"),payload:ty})).or(ih.extend({type:ts("FRAME_CONNECT_EMAIL_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_GET_FARCASTER_URI_SUCCESS"),payload:tx})).or(ih.extend({type:ts("FRAME_GET_FARCASTER_URI_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_CONNECT_FARCASTER_SUCCESS"),payload:tC})).or(ih.extend({type:ts("FRAME_CONNECT_FARCASTER_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_CONNECT_OTP_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_CONNECT_OTP_SUCCESS")})).or(ih.extend({type:ts("FRAME_CONNECT_DEVICE_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_CONNECT_DEVICE_SUCCESS")})).or(ih.extend({type:ts("FRAME_CONNECT_SOCIAL_SUCCESS"),payload:tk})).or(ih.extend({type:ts("FRAME_CONNECT_SOCIAL_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_GET_USER_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_GET_USER_SUCCESS"),payload:tS})).or(ih.extend({type:ts("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),payload:tA})).or(ih.extend({type:ts("FRAME_SIGN_OUT_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_SIGN_OUT_SUCCESS")})).or(ih.extend({type:ts("FRAME_IS_CONNECTED_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_IS_CONNECTED_SUCCESS"),payload:t_})).or(ih.extend({type:ts("FRAME_GET_CHAIN_ID_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_GET_CHAIN_ID_SUCCESS"),payload:tE})).or(ih.extend({type:ts("FRAME_RPC_REQUEST_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_RPC_REQUEST_SUCCESS"),payload:tI})).or(ih.extend({type:ts("FRAME_SESSION_UPDATE"),payload:ip})).or(ih.extend({type:ts("FRAME_UPDATE_EMAIL_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_UPDATE_EMAIL_SUCCESS"),payload:tT})).or(ih.extend({type:ts("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(ih.extend({type:ts("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:tR})).or(ih.extend({type:ts("FRAME_SYNC_THEME_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_SYNC_THEME_SUCCESS")})).or(ih.extend({type:ts("FRAME_SYNC_DAPP_DATA_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(ih.extend({type:ts("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:tP})).or(ih.extend({type:ts("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:tn})).or(ih.extend({type:ts("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:tN})).or(ih.extend({type:ts("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:tn}));let ig={set(e,t){im.isClient&&localStorage.setItem(`${h.STORAGE_KEY}${e}`,t)},get:e=>im.isClient?localStorage.getItem(`${h.STORAGE_KEY}${e}`):null,delete(e,t){im.isClient&&(t?localStorage.removeItem(e):localStorage.removeItem(`${h.STORAGE_KEY}${e}`))}},iw={address:/^0x(?:[A-Fa-f0-9]{40})$/u,transactionHash:/^0x(?:[A-Fa-f0-9]{64})$/u,signedMessage:/^0x(?:[a-fA-F0-9]{62,})$/u},im={checkIfAllowedToTriggerEmail(){let e=ig.get(h.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)throw Error(`Please try again after ${Math.ceil((3e4-t)/1e3)} seconds`)}},getTimeToNextEmailLogin(){let e=ig.get(h.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)return Math.ceil((3e4-t)/1e3)}return 0},checkIfRequestExists:e=>g.NOT_SAFE_RPC_METHODS.includes(e.method)||g.SAFE_RPC_METHODS.includes(e.method),getResponseType(e){let{type:t,payload:i}=e,r=t===h.FRAME_RPC_REQUEST_ERROR;if(r)return h.RPC_RESPONSE_TYPE_ERROR;let o="string"==typeof i&&(i.match(iw.transactionHash)||i.match(iw.signedMessage));return o?h.RPC_RESPONSE_TYPE_TX:h.RPC_RESPONSE_TYPE_OBJECT},checkIfRequestIsAllowed:e=>g.SAFE_RPC_METHODS.includes(e.method),isClient:"undefined"!=typeof window};i(92361),i(12044)},17832:function(e,t,i){"use strict";i.d(t,{sj:function(){return x},iH:function(){return T},CO:function(){return k},Ld:function(){return C}});let r=Symbol(),o=Symbol(),a=(e,t)=>new Proxy(e,t),n=Object.getPrototypeOf,s=new WeakMap,l=e=>e&&(s.has(e)?s.get(e):n(e)===Object.prototype||n(e)===Array.prototype),c=e=>"object"==typeof e&&null!==e,u=e=>{if(Array.isArray(e))return Array.from(e);let t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(e=>{e.configurable=!0}),Object.create(n(e),t)},d=e=>e[o]||e,p=(e,t,i,n)=>{if(!l(e))return e;let s=n&&n.get(e);if(!s){let t=d(e);s=Object.values(Object.getOwnPropertyDescriptors(t)).some(e=>!e.configurable&&!e.writable)?[t,u(t)]:[t],null==n||n.set(e,s)}let[c,h]=s,g=i&&i.get(c);return g&&!!h===g[1].f||((g=((e,t)=>{let i={f:t},a=!1,n=(t,r)=>{if(!a){let o=i.a.get(e);if(o||(o={},i.a.set(e,o)),"w"===t)o.w=!0;else{let e=o[t];e||(e=new Set,o[t]=e),e.add(r)}}},s={get:(t,r)=>r===o?e:(n("k",r),p(Reflect.get(t,r),i.a,i.c,i.t)),has:(t,o)=>o===r?(a=!0,i.a.delete(e),!0):(n("h",o),Reflect.has(t,o)),getOwnPropertyDescriptor:(e,t)=>(n("o",t),Reflect.getOwnPropertyDescriptor(e,t)),ownKeys:e=>(n("w"),Reflect.ownKeys(e))};return t&&(s.set=s.deleteProperty=()=>!1),[s,i]})(c,!!h))[1].p=a(h||c,g[0]),i&&i.set(c,g)),g[1].a=t,g[1].c=i,g[1].t=n,g[1].p},h=(e,t,i,r)=>{if(Object.is(e,t))return!1;if(!c(e)||!c(t))return!0;let o=i.get(d(e));if(!o)return!0;if(r){let i=r.get(e);if(i&&i.n===t)return i.g;r.set(e,{n:t,g:!1})}let a=null;try{for(let i of o.h||[])if(a=Reflect.has(e,i)!==Reflect.has(t,i))return a;if(!0===o.w){if(a=((e,t)=>{let i=Reflect.ownKeys(e),r=Reflect.ownKeys(t);return i.length!==r.length||i.some((e,t)=>e!==r[t])})(e,t))return a}else for(let i of o.o||[])if(a=!!Reflect.getOwnPropertyDescriptor(e,i)!=!!Reflect.getOwnPropertyDescriptor(t,i))return a;for(let n of o.k||[])if(a=h(e[n],t[n],i,r))return a;return null===a&&(a=!0),a}finally{r&&r.set(e,{n:t,g:a})}},g=e=>l(e)&&e[o]||null,w=(e,t=!0)=>{s.set(e,t)},f=e=>"object"==typeof e&&null!==e,m=new WeakMap,v=new WeakSet,b=(e=Object.is,t=(e,t)=>new Proxy(e,t),i=e=>f(e)&&!v.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),r=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},o=new WeakMap,a=(e,t,i=r)=>{let n=o.get(e);if((null==n?void 0:n[0])===t)return n[1];let s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return w(s,!0),o.set(e,[t,s]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(s,t))return;let r=Reflect.get(e,t),o={value:r,enumerable:!0,configurable:!0};if(v.has(r))w(r,!1);else if(r instanceof Promise)delete o.value,o.get=()=>i(r);else if(m.has(r)){let[e,t]=m.get(r);o.value=a(e,t(),i)}Object.defineProperty(s,t,o)}),Object.preventExtensions(s)},n=new WeakMap,s=[1,1],l=r=>{if(!f(r))throw Error("object required");let o=n.get(r);if(o)return o;let c=s[0],u=new Set,d=(e,t=++s[0])=>{c!==t&&(c=t,u.forEach(i=>i(e,t)))},p=s[1],h=(e=++s[1])=>(p===e||u.size||(p=e,b.forEach(([t])=>{let i=t[1](e);i>c&&(c=i)})),c),w=e=>(t,i)=>{let r=[...t];r[1]=[e,...r[1]],d(r,i)},b=new Map,y=(e,t)=>{if(b.has(e))throw Error("prop listener already exists");if(u.size){let i=t[3](w(e));b.set(e,[t,i])}else b.set(e,[t])},x=e=>{var t;let i=b.get(e);i&&(b.delete(e),null==(t=i[1])||t.call(i))},C=e=>{u.add(e),1===u.size&&b.forEach(([e,t],i)=>{if(t)throw Error("remove already exists");let r=e[3](w(i));b.set(i,[e,r])});let t=()=>{u.delete(e),0===u.size&&b.forEach(([e,t],i)=>{t&&(t(),b.set(i,[e]))})};return t},k=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),T={deleteProperty(e,t){let i=Reflect.get(e,t);x(t);let r=Reflect.deleteProperty(e,t);return r&&d(["delete",[t],i]),r},set(t,r,o,a){let s=Reflect.has(t,r),c=Reflect.get(t,r,a);if(s&&(e(c,o)||n.has(o)&&e(c,n.get(o))))return!0;x(r),f(o)&&(o=g(o)||o);let u=o;if(o instanceof Promise)o.then(e=>{o.status="fulfilled",o.value=e,d(["resolve",[r],e])}).catch(e=>{o.status="rejected",o.reason=e,d(["reject",[r],e])});else{!m.has(o)&&i(o)&&(u=l(o));let e=!v.has(u)&&m.get(u);e&&y(r,e)}return Reflect.set(t,r,u,a),d(["set",[r],o,c]),!0}},S=t(k,T);n.set(r,S);let A=[k,h,a,C];return m.set(S,A),Reflect.ownKeys(r).forEach(e=>{let t=Object.getOwnPropertyDescriptor(r,e);"value"in t&&(S[e]=r[e],delete t.value,delete t.writable),Object.defineProperty(k,e,t)}),S})=>[l,m,v,e,t,i,r,o,a,n,s],[y]=b();function x(e={}){return y(e)}function C(e,t,i){let r;let o=m.get(e);o||console.warn("Please use proxy object");let a=[],n=o[3],s=!1,l=e=>{if(a.push(e),i){t(a.splice(0));return}r||(r=Promise.resolve().then(()=>{r=void 0,s&&t(a.splice(0))}))},c=n(l);return s=!0,()=>{s=!1,c()}}function k(e,t){let i=m.get(e);i||console.warn("Please use proxy object");let[r,o,a]=i;return a(r,o(),t)}function T(e){return v.add(e),e}},73932:function(e,t,i){"use strict";let r;i.d(t,{VW:function(){return a},Yr:function(){return d}});var o=i(17832);function a(e,t,i,r){let a=e[t];return(0,o.Ld)(e,()=>{let r=e[t];Object.is(a,r)||i(a=r)},r)}Symbol();let n=new WeakMap;new WeakMap;let s=(e,t)=>{let i=n.get(e);i&&(i[0].forEach(t=>{let{d:i}=t;e!==i&&s(i)}),++i[2],t&&i[3].add(t))},l=e=>{let t=n.get(e);t&&(--t[2],t[2]||(t[3].forEach(e=>e()),t[3].clear()),t[0].forEach(t=>{let{d:i}=t;e!==i&&l(i)}))},c=e=>"object"==typeof e&&null!==e,u=e=>{if(r||(r=unstable_buildProxyFunction()[2]),!c(e)||r.has(e))return e;let t=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return Reflect.ownKeys(e).forEach(i=>{t[i]=u(e[i])}),t};function d(e){let t=(0,o.sj)({data:Array.from(e||[]),has(e){return this.data.some(t=>t[0]===e)},set(e,t){let i=this.data.find(t=>t[0]===e);return i?i[1]=t:this.data.push([e,t]),this},get(e){var t;return null==(t=this.data.find(t=>t[0]===e))?void 0:t[1]},delete(e){let t=this.data.findIndex(t=>t[0]===e);return -1!==t&&(this.data.splice(t,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(e){this.data.forEach(t=>{e(t[1],t[0],this)})},keys(){return this.data.map(e=>e[0]).values()},values(){return this.data.map(e=>e[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(t,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(t),t}}}]);