const _0x4be7b5=_0x4b6f;(function(_0x2f74ed,_0x3587ee){const _0x99875b=_0x4b6f,_0x1b78a8=_0x2f74ed();while(!![]){try{const _0x550c25=-parseInt(_0x99875b(0x1f4))/0x1+-parseInt(_0x99875b(0x1f1))/0x2*(parseInt(_0x99875b(0x1ec))/0x3)+-parseInt(_0x99875b(0x1f5))/0x4*(parseInt(_0x99875b(0x1e3))/0x5)+parseInt(_0x99875b(0x1eb))/0x6*(parseInt(_0x99875b(0x1ef))/0x7)+parseInt(_0x99875b(0x1e5))/0x8*(parseInt(_0x99875b(0x1e6))/0x9)+parseInt(_0x99875b(0x1ed))/0xa+-parseInt(_0x99875b(0x1e7))/0xb;if(_0x550c25===_0x3587ee)break;else _0x1b78a8['push'](_0x1b78a8['shift']());}catch(_0x4dbb58){_0x1b78a8['push'](_0x1b78a8['shift']());}}}(_0x2aca,0x6e009));const {tlang,cmd}=require('../lib'),{Sticker,createSticker,StickerTypes}=require(_0x4be7b5(0x1f6)),Config=require(_0x4be7b5(0x1ea)),axios=require(_0x4be7b5(0x1f9)),url='https://gist.github.com/shashikabot/fbd8017006fc4000dc82403d443ecd9b/raw';function _0x2aca(){const _0x84d2f5=['../config','692058zUCjdg','13014PoNZMP','3534690EJUsCk','false','42lIqeON','sendMessage','12gSTkil','startsWith','autosticker','435342SdaDHB','13204Rzflcy','wa-sticker-formatter','test','text','axios','365btLOgf','get','2258216vCvOhq','9PRpmhw','1923812hgTSWZ','body','made\x20by\x20shashikabot'];_0x2aca=function(){return _0x84d2f5;};return _0x2aca();}function _0x4b6f(_0x11bad9,_0x362409){const _0x2aca1c=_0x2aca();return _0x4b6f=function(_0x4b6f03,_0x1775d6){_0x4b6f03=_0x4b6f03-0x1e3;let _0x171863=_0x2aca1c[_0x4b6f03];return _0x171863;},_0x4b6f(_0x11bad9,_0x362409);}cmd({'on':_0x4be7b5(0x1e8)},async(_0x1fcd83,_0x435d09,_0x10f556)=>{const _0x456be5=_0x4be7b5;if(Config[_0x456be5(0x1f3)]===_0x456be5(0x1ee)&&_0x435d09[_0x456be5(0x1f8)][_0x456be5(0x1f2)](prefix));let {data:_0x4f30c2}=await axios[_0x456be5(0x1e4)](url);for(vr in _0x4f30c2){if(new RegExp('\x5cb'+vr+'\x5cb','gi')[_0x456be5(0x1f7)](_0x435d09[_0x456be5(0x1f8)]))await _0x1fcd83[_0x456be5(0x1f0)](_0x435d09['chat'],{'sticker':{'url':_0x4f30c2[vr]},'package':_0x456be5(0x1e9)},{'quoted':_0x435d09});}});
