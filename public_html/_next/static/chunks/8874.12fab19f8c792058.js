!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0a7ce8ab-a095-445f-a20f-a142b45283c9",e._sentryDebugIdIdentifier="sentry-dbid-0a7ce8ab-a095-445f-a20f-a142b45283c9")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8874],{78874:function(e,t,i){i.r(t),i.d(t,{W3mModal:function(){return c}});var n=i(77548),o=i(49117),s=i(29974),a=i(54222),r=s.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,d=function(e,t,i,n){var o,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let l="scroll-lock",c=class extends s.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=n.IN.state.open,this.caipAddress=n.Ni.state.caipAddress,this.isSiweEnabled=n.hD.state.isSiweEnabled,this.connected=n.Ni.state.isConnected,this.loading=n.IN.state.loading,this.initializeTheming(),n.QT.prefetch(),this.unsubscribe.push(n.IN.subscribeKey("open",e=>e?this.onOpen():this.onClose()),n.IN.subscribeKey("loading",e=>{this.loading=e,this.onNewAddress(n.Ni.state.caipAddress)}),n.Ni.subscribeKey("isConnected",e=>this.connected=e),n.Ni.subscribeKey("caipAddress",e=>this.onNewAddress(e)),n.hD.subscribeKey("isSiweEnabled",e=>this.isSiweEnabled=e)),n.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?s.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){if(this.isSiweEnabled){let{SIWEController:e}=await Promise.all([i.e(9585),i.e(6822)]).then(i.bind(i,38042));"success"!==e.state.status&&this.connected&&await n.lZ.disconnect()}n.IN.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=n.u0.state,i=o.UiHelperUtil.getColorTheme(t);(0,o.initializeTheming)(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),n.KC.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=l,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${l}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){let{tagName:i}=t.target;!i||i.includes("W3M-")||i.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){if(!this.connected||this.loading)return;let t=n.j1.getPlainAddress(this.caipAddress),o=n.j1.getPlainAddress(e),s=n.j1.getNetworkId(this.caipAddress),a=n.j1.getNetworkId(e);if(this.caipAddress=e,this.isSiweEnabled){let{SIWEController:e}=await Promise.all([i.e(9585),i.e(6822)]).then(i.bind(i,38042)),n=await e.getSession();if(n&&t&&o&&t!==o){e.state._client?.options.signOutOnAccountChange&&(await e.signOut(),this.onSiweNavigation());return}if(n&&s&&a&&s!==a){e.state._client?.options.signOutOnNetworkChange&&(await e.signOut(),this.onSiweNavigation());return}this.onSiweNavigation()}}onSiweNavigation(){this.open?n.Pc.push("ConnectingSiwe"):n.IN.open({view:"ConnectingSiwe"})}};c.styles=r,d([(0,a.SB)()],c.prototype,"open",void 0),d([(0,a.SB)()],c.prototype,"caipAddress",void 0),d([(0,a.SB)()],c.prototype,"isSiweEnabled",void 0),d([(0,a.SB)()],c.prototype,"connected",void 0),d([(0,a.SB)()],c.prototype,"loading",void 0),c=d([(0,o.customElement)("w3m-modal")],c)}}]);