// canales de lista m3u https://jsfiddle.net/onigetoc/f26zuLtw/
function m3utojson(m3u) {
    return m3u
        .replace('#EXTM3U', '')
        .split('#EXTINF:-1 ')
        .slice(1)
        .map(function(str, index) {
            let channel = str.split('\n').slice(0,-1);
			if(channel[1].indexOf('m3u8') >= 0){
            /* 
                    channel[0].split('"')[0]
                        | channel[0].split('"')[1]
                        |    |   channel[0].split('"')[2]
                        |    |      |    channel[0].split('"')[3]   
                        |    |      |        |     channel[0].split('"')[4]  
                        |    |      |        |         |      channel[0].split('"')[5]          
                        |    |      |        |         |             |        channel[0].split(',')[1]    
                        __|__  |  ____|___   __|__   ____|___   _______|______    ___|__
                    |     | | |        | |     | |        | |              |  |      |
            #EXTINF:-1 tvg-id="1" tvg-name="nombre1" tvg-logo="https://foto.png", nombre1
            https://enlace.m3u8
            -------|-----------
                channel[1]

            */
                return {
                 "id": index + 1,
                 "tvg-id": channel[0].split('"')[1],
                 "title": channel[0].split('"')[3],
                 "name": channel[0].split(',')[1],
                 "m3u8_url": channel[1].replace('http://', 'https://')                        
                }
			}
        });
}



// https://www.m3u.cl/iptv-chile.php
let m3u = `
#EXTM3U
#EXTINF:-1 tvg-id="4" tvg-name="ts sport 1" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", ts sport 1 * | CL
https://edge1.laotv.la/live/TSport1/index.m3u8
#EXTINF:-1 tvg-id="5" tvg-name="abu dhabi sport 1" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", abu dhabi sport 1 * | CL
https://admdn1.cdn.mangomolo.com/adsports1/smil:adsports1.stream.smil/playlist.m3u8
#EXTINF:-1 tvg-id="465" tvg-name="Retro Plus TV Señal 3" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", Retro Plus TV Señal 3 * | CL
https://video06.logicahost.com.br/retroplussenal3/retroplussenal3/playlist.m3u8
#EXTINF:-1 tvg-id="1160" tvg-name="VClassicTV" tvg-logo="https://i2.paste.pics/99cc893c37784a17aac9a95ac3c7e5c8.png", VClassicTV * | CL
https://5eaccbab48461.streamlock.net:1936/8112/8112/playlist.m3u8
#EXTINF:-1 tvg-id="1255" tvg-name="VClassicTV Tropical" tvg-logo="https://i2.paste.pics/355ba171055dd0e6747131673432cc18.png", VClassicTV Tropical * | CL
https://5eaccbab48461.streamlock.net:1936/8222/8222/playlist.m3u8
#EXTINF:-1 tvg-id="31" tvg-name="Portal FoxMix" tvg-logo="https://i2.paste.pics/6abc319563c207c4ba1fb2c199fedd86.png", Portal FoxMix * | CL
https://panel.tvstream.cl:1936/8040/8040/playlist.m3u8
#EXTINF:-1 tvg-id="1436" tvg-name="Apanines TV" tvg-logo="https://i2.paste.pics/eee2cbc0f52cbb9c7c73ee13f72c0b96.png", Apanines TV * | CL
https://inliveserver.com:1936/10010/10010/playlist.m3u8
#EXTINF:-1 tvg-id="1058" tvg-name="Spectrum Channel" tvg-logo="https://i2.paste.pics/e3cde58abf314e0e6b17b595c357936a.png", Spectrum Channel * | CL
https://panel.miplay.cl:8081/spectrumchannel/index.m3u8
#EXTINF:-1 tvg-id="1112" tvg-name="Fanpop TV" tvg-logo="https://i2.paste.pics/5d6d67c298360548fd41a897f987628c.png", Fanpop TV * | CL
https://wifispeed.trapemn.tv:1936/infantil/energeek-2/playlist.m3u8
#EXTINF:-1 tvg-id="947" tvg-name="EnerGeek" tvg-logo="https://i2.paste.pics/5efe361b75000b6eb6104bf22a0880fe.png", EnerGeek * | CL
https://wifispeed.trapemn.tv:1936/infantil/energeek-1/playlist.m3u8
#EXTINF:-1 tvg-id="1479" tvg-name="Fortaleza TV" tvg-logo="https://i2.paste.pics/34c6e0cc1a8eccd67342a70fb2281c7c.png", Fortaleza TV | CL
https://multimedia.fortalezatv.cl/video/video.m3u8
https://multimedia.fortalezatv.cl/video/video.m3u8
#EXTINF:-1 tvg-id="1Plus1Sport.ua" tvg-logo="https://i.imgur.com/tHVc8on.png" group-title="Sports",1+1 Спорт (720p) [Not 24/7]
https://live-k2301-kbp.1plus1.video/sport/smil:sport.smil/playlist.m3u8
#EXTINF:-1 tvg-id="ASpor.tr" tvg-logo="https://i.imgur.com/ZhkZzLf.png" group-title="Sports",A Spor (1080p) [Not 24/7]
https://ythls.onrender.com/channel/UCJElRTCNEmLemgirqvsW63Q.m3u8
#EXTINF:-1 tvg-id="AbuDhabiSports1.ae" tvg-logo="https://i.imgur.com/6BVWk8z.png" group-title="Sports",Abu Dhabi Sports 1 (1080p)
https://admdn1.cdn.mangomolo.com/adsports1/smil:adsports1.stream.smil/playlist.m3u8
#EXTINF:-1 tvg-id="AbuDhabiSports2.ae" tvg-logo="https://i.imgur.com/4rVm3oZ.png" group-title="Sports",Abu Dhabi Sports 2 (1080p)
https://admdn5.cdn.mangomolo.com/adsports2/smil:adsports2.stream.smil/playlist.m3u8
#EXTINF:-1 tvg-id="ACCNetwork.us" tvg-logo="https://i.imgur.com/TpCkbkT.png" group-title="Sports",ACC Network (720p)
https://a.jsrdn.com/broadcast/542cb2ce3c/+0000/c.m3u8
#EXTINF:-1 tvg-id="ACISportTV.it" tvg-logo="https://i.imgur.com/iLXjMvB.png" group-title="Sports",ACI Sport TV (1080p)
https://g4wlk6xpy23a-hls-live.mariatvcdn.it/acisporttv/b7a3464f8e2001314de9fefebf11229d.sdp/playlist.m3u8
#EXTINF:-1 tvg-id="ADOTV.bj" tvg-logo="https://i.imgur.com/pxFamLr.png" group-title="Sports",ADO TV (720p)
https://stream01.adotv-fm.bj/ado-tv-live/index.m3u8
#EXTINF:-1 tvg-id="AdventureSportsTV.us" tvg-logo="https://i.imgur.com/9oyc88J.png" group-title="Sports",Adventure Sports TV (360p) [Not 24/7]
https://gizmeon.s.llnwi.net/channellivev3/live/master.m3u8?channel=275
#EXTINF:-1 tvg-id="AioSport1.ir" tvg-logo="https://assets.aionet.ir/channels/100347" group-title="Sports",Aio Sport 1 (480p)
https://af.ayas.ir/hls2/aiosport.m3u8
#EXTINF:-1 tvg-id="AioSport2.ir" tvg-logo="https://assets.aionet.ir/channels/100347" group-title="Sports",Aio Sport 2 (480p) [Not 24/7]
https://af.ayas.ir/hls2/aiosport2.m3u8
#EXTINF:-1 tvg-id="AlIraqiaSport.iq" tvg-logo="https://i.imgur.com/DrrlxTO.png" group-title="Sports",Al Iraqia Sport (1080p) [Geo-blocked]
https://livestream.almanasa.tv:8130/sport/ch6/ch6_1080.m3u8
#EXTINF:-1 tvg-id="AlfaSport.cy" tvg-logo="https://i.imgur.com/vhMPYIW.png" group-title="Sports",Alfa Sport (1080p) [Not 24/7]
https://dev.aftermind.xyz/edge-hls/unitrust/alfasports/index.m3u8?token=8TXWzhY3h6jrzqEqu
#EXTINF:-1 tvg-id="AllSports.br" tvg-logo="https://i.imgur.com/wULpnYR.png" group-title="Sports",All Sports (720p)
https://5cf4a2c2512a2.streamlock.net/dgrau/dgrau/playlist.m3u8
#EXTINF:-1 tvg-id="AntenaSport.ro" tvg-logo="https://i.imgur.com/jp8VX4E.png" group-title="Sports",AntenaSport (720p) [Not 24/7]
https://stream1.antenaplay.ro/dfs/farasecrete5/playlist.m3u8
#EXTINF:-1 tvg-id="ArenaSport3BosniaandHerzegovina.ba" tvg-logo="https://i.imgur.com/3r3burN.png" group-title="Sports",Arena Sport 3 BA (1080p)
http://94.250.2.6:7374/play/a02o/index.m3u8
#EXTINF:-1 tvg-id="Arryadia.ma" tvg-logo="https://i.imgur.com/XjzK3gZ.png" group-title="Sports",Arryadia (360p) [Not 24/7]
https://cdnamd-hls-globecast.akamaized.net/live/ramdisk/arriadia/hls_snrt/arriadia.m3u8
#EXTINF:-1 tvg-id="ATG.se" tvg-logo="https://i.imgur.com/5CdW62M.png" group-title="Sports",ATG (432p)
https://httpcache0-00688-cacheliveedge0.dna.qbrick.com/00688-cacheliveedge0/out/u/atg_sdi_1_free.m3u8
#EXTINF:-1 tvg-id="AwapaSportsTV.sv" tvg-logo="https://i.imgur.com/MNw5cJH.jpg" group-title="Sports",Awapa Sports TV (1080p) [Not 24/7]
https://mgv-awapa.akamaized.net/hls/live/2104282/MGV_CHANNEL15/master.m3u8
#EXTINF:-1 tvg-id="BahrainSports1.bh" tvg-logo="https://i.imgur.com/fBpLsbC.png" group-title="Sports",Bahrain Sports 1 (720p) [Not 24/7]
https://5c7b683162943.streamlock.net/live/ngrp:sportsone_all/playlist.m3u8
#EXTINF:-1 tvg-id="BahrainSports2.bh" tvg-logo="https://i.imgur.com/ZkuZmIo.png" group-title="Sports",Bahrain Sports 2 (720p) [Not 24/7]
https://5c7b683162943.streamlock.net/live/ngrp:bahrainsportstwo_all/playlist.m3u8
#EXTINF:-1 tvg-id="beINSPORTSXTRA.us" tvg-logo="https://i.imgur.com/uJosqHh.png" group-title="Sports",beIN Sports Xtra (1080p)
https://dai.google.com/linear/hls/event/3e-9BOvHQrCI9hboMYjb6w/master.m3u8
#EXTINF:-1 tvg-id="BEKSportsWest.us" tvg-logo="https://i.imgur.com/uJb4VOc.png" group-title="Sports",BEK TV Sports West (720p)
https://cdn3.wowza.com/5/ZWQ1K2NYTmpFbGsr/BEK-WOWZA-1/smil:BEKPRIMEW.smil/playlist.m3u8
#EXTINF:-1 tvg-id="BestCableSportsPeru.pe" tvg-logo="https://i.imgur.com/nflqmSC.png" group-title="Sports",Best Cable Sports Perú (720p)
https://mi.godo.net.pe/Best-sport-00000x111/index.m3u8
#EXTINF:-1 tvg-id="CAFTV.eg" tvg-logo="https://www.cafonline.com/assets/icons/caflogo_black.png" group-title="Sports",CAF TV (1080p) [Not 24/7]
https://ythls.onrender.com/channel/UCr5K057x3mHroPHsNk9OiwA.m3u8
#EXTINF:-1 tvg-id="CampusLore.us" tvg-logo="https://i.imgur.com/dCXl0rq.png" group-title="Sports",CampusLore (720p)
https://linear-235.frequency.stream/dist/glewedtv/235/hls/master/playlist.m3u8
#EXTINF:-1 tvg-id="Canal11.pt" tvg-logo="https://i.imgur.com/mbQCGm5.png" group-title="Sports",Canal 11 (1080p) [Not 24/7]
https://ythls.onrender.com/channel/UCMfEEaNYYX5w6nbvccTCHhg.m3u8
#EXTINF:-1 tvg-id="CanaldoInter.br" tvg-logo="https://i.imgur.com/TQFWEIS.png" group-title="Sports",Canal do Inter (720p) [Not 24/7]
https://video01.soultv.com.br/internacional/internacional/playlist.m3u8
#EXTINF:-1 tvg-id="CanalMotor.no" tvg-logo="https://i.imgur.com/BHm0wem.png" group-title="Sports",Canal Motor (720p)
https://digicom.hls.iptvdc.com/canalmotor/index.m3u8
#EXTINF:-1 tvg-id="CCTV5.cn" tvg-logo="https://i.imgur.com/EqURkoF.png" group-title="Sports",CCTV-5体育 (1080p)
http://39.134.39.39/PLTV/88888888/224/3221226224/index.m3u8
#EXTINF:-1 tvg-id="CDR.cl" tvg-logo="https://i.imgur.com/xevZNi6.png" group-title="Sports",CDR (720p)
https://live-hls-xgod.livepush.io/live_cdn/emaf6CHYV7M-RQcL2/index.m3u8
#EXTINF:-1 tvg-id="CnArDeportes.ar" tvg-logo="https://i.imgur.com/07ki2df.png" group-title="Sports",CnAr Deportes (1440p)
https://stmv1.cnarlatam.com/cnardeportes2/cnardeportes2/playlist.m3u8
#EXTINF:-1 tvg-id="ContactoDeportivo.pe" tvg-logo="https://i.imgur.com/bBnWaq2.png" group-title="Sports",Contacto Deportivo (720p) [Not 24/7]
https://live.obslivestream.com/cdeportivo/index.m3u8
#EXTINF:-1 tvg-id="CRTV.cl" tvg-logo="https://i2.paste.pics/bf68b159547597c39574aec9dd7c626a.png" group-title="Sports",CRTV (720p)
https://vdo.panelstreaming.live:3058/stream/play.m3u8
#EXTINF:-1 tvg-id="D13.cl" tvg-logo="https://i.imgur.com/CmVZkbS.png" group-title="Sports",D13 (1080p)
https://jireh-2-hls-video-us-isp.dps.live/hls-video/ey6283je82983je9823je8jowowiekldk9838274/13d/13d.smil/playlist.m3u8
#EXTINF:-1 tvg-id="DDSports.in" tvg-logo="https://i.imgur.com/J2Ky5OO.png" group-title="Sports",DD Sports (576p)
http://103.199.161.254/Content/ddsports/Live/Channel(DDSPORTS)/index.m3u8
#EXTINF:-1 tvg-id="DeporTV.ar" tvg-logo="https://i.imgur.com/THk9ARS.png" group-title="Sports",DeporTV (1080p) [Not 24/7]
https://538d0bde28ccf.streamlock.net/live-cont.ar/deportv/playlist.m3u8
#EXTINF:-1 tvg-id="DirecTVSportsArgentina.ar" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/DirecTV_Sports_Latin_America_%282018%29.png/512px-DirecTV_Sports_Latin_America_%282018%29.png" group-title="Sports",DirecTV Sports (480p) [Geo-blocked]
http://190.210.221.119/Processor3_9_chunklist_b1300000.m3u8
#EXTINF:-1 tvg-id="DSTV.hu" tvg-logo="https://i.imgur.com/xKJoN8L.png" group-title="Sports",DSTV (720p)
http://79.120.178.90:1935/dstv/dstvlive/playlist.m3u8
#EXTINF:-1 tvg-id="DTPlay.bo" tvg-logo="https://i.imgur.com/2nVIjho.png" group-title="Sports",DT Play (Deporte Total) (720p) [Not 24/7]
https://tv.portalexpress.es:3044/live/dtplaylive.m3u8
#EXTINF:-1 tvg-id="DubaiRacing2.ae" tvg-logo="https://i.imgur.com/H2TTn7t.png" group-title="Sports",Dubai Racing 2 (1080p)
https://dmithrvll.cdn.mangomolo.com/dubairacing/smil:dubairacing.smil/playlist.m3u8
#EXTINF:-1 tvg-id="DubaiRacing3.ae" tvg-logo="https://i.imgur.com/Vg4fxmc.png" group-title="Sports",Dubai Racing 3 (1080p)
https://dmithrvll.cdn.mangomolo.com/dubaimubasher/smil:dubaimubasher.smil/playlist.m3u8
#EXTINF:-1 tvg-id="DubaiRacing.ae" tvg-logo="https://i.imgur.com/BpcV8jS.png" group-title="Sports",Dubai Racing (1080p)
https://dmisvthvll.cdn.mgmlcdn.com/events/smil:events.stream.smil/playlist.m3u8
#EXTINF:-1 tvg-id="DubaiSports1.ae" tvg-logo="https://i.imgur.com/Poxw8lG.png" group-title="Sports",Dubai Sports 1 (1080p)
https://dmitnthfr.cdn.mgmlcdn.com/dubaisports/smil:dubaisports.stream.smil/chunklist.m3u8
#EXTINF:-1 tvg-id="DubaiSports2.ae" tvg-logo="https://i.imgur.com/PMJ7Zmo.png" group-title="Sports",Dubai Sports 2 (720p)
https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd/smil:dubaisportshd.smil/index.m3u8
#EXTINF:-1 tvg-id="DubaiSports3.ae" tvg-logo="https://i.imgur.com/U0A8Gex.png" group-title="Sports",Dubai Sports 3 (1080p) [Not 24/7]
https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd5/smil:dubaisportshd5.smil/index.m3u8
#EXTINF:-1 tvg-id="EDGEsport.uk" tvg-logo="https://i.imgur.com/oLmgGDG.png" group-title="Sports",EDGEsport (1080p)
https://edgesport-rakuten-samsung.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-id="ERTSports1.gr" tvg-logo="https://i.imgur.com/EsczO2H.png" group-title="Sports",ERT Sports 1 (1080p) [Geo-blocked]
http://cbd537474fbad4634b64787657ff6456.msvdn.net/sports1/ert_sports1_main/mainabr/ert_sports1_main/main_1080/chunks.m3u8
#EXTINF:-1 tvg-id="ERTSports2.gr" tvg-logo="https://i.imgur.com/b2SNQPi.png" group-title="Sports",ERT Sports 2 (1080p) [Geo-blocked]
http://cbd537474fbad4634b64787657ff6456.msvdn.net/sports2/ert_sports2_main/mainabr/ert_sports2_main/main_1080/chunks.m3u8
#EXTINF:-1 tvg-id="Esport3.es" tvg-logo="https://i.imgur.com/Kbnxu7a.png" group-title="Sports",Esport3 (1080p) [Geo-blocked]
https://directes-tv-es.ccma.cat/live-origin/esport3-hls/master.m3u8
#EXTINF:-1 tvg-id="ESTV.us" tvg-logo="https://i.imgur.com/qHNV0f5.png" group-title="Sports",ESTV (1080p)
https://estv-rakuten-samsung.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-id="FastFunBox.nl" tvg-logo="https://i.imgur.com/X5tET0H.png" group-title="Sports",Fast&FunBox (576p)
https://vod1.laki.eu/fastnfun/playlist.m3u8
#EXTINF:-1 tvg-id="FightNetwork.ca" tvg-logo="https://i.imgur.com/vlKPZHR.png" group-title="Sports",Fight Network (1080p)
https://d12a2vxqkkh1bo.cloudfront.net/hls/main.m3u8
#EXTINF:-1 tvg-id="FightSports.us" tvg-logo="https://i.imgur.com/nV55veq.png" group-title="Sports",FIGHT SPORTS (1080p)
https://shls-fight-sports-ak.akamaized.net/out/v1/ee7e6475b12e484bbfa5c31461ad4306/index.m3u8
#EXTINF:-1 tvg-id="FightBox.nl" tvg-logo="https://i.imgur.com/mRsnztA.png" group-title="Sports" user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",FightBox HD (480p)
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148
http://ott-cdn.ucom.am/s86/index.m3u8
#EXTINF:-1 tvg-id="FightingSpirit.us" tvg-logo="https://i.imgur.com/PoI9jpp.png" group-title="Sports",Fighting Spirit (720p)
https://a.jsrdn.com/broadcast/47cff5378f/+0000/c.m3u8
#EXTINF:-1 tvg-id="Fite.us" tvg-logo="https://i.imgur.com/4w95NZQ.png" group-title="Sports",Fite (720p) [Not 24/7]
https://cdn-cf.fite.tv/linear/fite247/playlist.m3u8
#EXTINF:-1 tvg-id="FTF.us" tvg-logo="https://i.imgur.com/wCAwYZ7.png" group-title="Sports",FTF (720p)
https://eleven-rebroadcast-samsung.roku.wurl.com/manifest/playlist.m3u8
#EXTINF:-1 tvg-id="FTV.bo" tvg-logo="https://i.imgur.com/YOr1Oac.png" group-title="Sports",FTV (720p)
https://master.tucableip.com/ftv/index.m3u8
#EXTINF:-1 tvg-id="FuboSportsNetwork.us" tvg-logo="https://i.imgur.com/qFNRJLb.png" group-title="Sports",fubo Sports Network (720p)
https://dai2-xumo.fubo.tv/amagi_hls_data_xumo1212A-fubo/CDN/master.m3u8
#EXTINF:-1 tvg-id="FUELTV.at" tvg-logo="https://i.imgur.com/fm0UmZl.png" group-title="Sports",FUEL TV (1080p)
https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/fuel-tv/606c2f67-acff-4152-975a-e5bfef54eb61/2.m3u8
#EXTINF:-1 tvg-id="GEMFit.ir" tvg-logo="https://i.imgur.com/7FQxaII.png" group-title="Sports",GEM Fit (480p)
https://hd.90minlive.online/live/gemfit/playlist.m3u8
#EXTINF:-1 tvg-id="GloryKickboxing.us" tvg-logo="https://i.imgur.com/AQbc1ER.jpg" group-title="Sports",Glory Kickboxing (720p)
https://dai2.xumo.com/amagi_hls_data_xumo1212A-redboxglorykickboxing/CDN/playlist.m3u8
#EXTINF:-1 tvg-id="GolfChannelThailand.th" tvg-logo="https://i.imgur.com/uz8vM2k.png" group-title="Sports" user-agent="Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36",Golf Channel Thailand (720p) [Not 24/7]
#EXTVLCOPT:http-user-agent=Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36
https://smart-tv.livedoomovie.com:4431/02_golfhd_720p/chunklist.m3u8
#EXTINF:-1 tvg-id="grvty.us" tvg-logo="https://i.imgur.com/7qPKYVh.png" group-title="Sports",grvty (1080p)
https://d37j5jg7ob6kji.cloudfront.net/index.m3u8
#EXTINF:-1 tvg-id="HardKnocks.ca" tvg-logo="https://i.imgur.com/nt9B6jx.png" group-title="Sports",Hard Knocks (1080p) [Not 24/7]
https://d3uyzhwvmemdyf.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/Hard-Knocks-DistroTV/109.m3u8
#EXTINF:-1 tvg-id="IdmanTV.az" tvg-logo="https://i.imgur.com/fM9FOrZ.png" group-title="Sports",İdman TV (576p)
http://109.205.166.68/server124/idman_az/index.m3u8
#EXTINF:-1 tvg-id="IMPACTWrestling.us" tvg-logo="https://i.imgur.com/XO8u1V7.png" group-title="Sports",IMPACT Wrestling (1080p)
https://d2p372oxiwmcn1.cloudfront.net/hls/main.m3u8
#EXTINF:-1 tvg-id="InsightTV.nl" tvg-logo="https://i.imgur.com/7xmaoL0.png" group-title="Sports",Insight TV (720p)
https://insighttv-eng-rakuten.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-id="IshushoTV.rw" tvg-logo="https://i.ibb.co/BjpLqbN/ISHUSHO-TV-LOGO-orange.png" group-title="Culture;Sports",Ishusho TV (720p) [Not 24/7]
https://tv.livebcm.com:3425/stream/play.m3u8
#EXTINF:-1 tvg-id="JOJSport.sk" tvg-logo="https://i.imgur.com/KirqaU4.png" group-title="Sports",JOJ Šport (1080p)
https://st01-2.iptv.joj.sk/110-tv-pc.m3u8
#EXTINF:-1 tvg-id="JordanSport.jo" tvg-logo="https://i.imgur.com/2EmrZPQ.png" group-title="Sports",Jordan Sport (1080p) [Geo-blocked]
https://jrtv-live.ercdn.net/jordansporthd/jordansporthd.m3u8
#EXTINF:-1 tvg-id="KOKFightsTV.lt" tvg-logo="https://kokfights.com/wp-content/uploads/2018/05/kok_logo.jpg" group-title="Sports",KOK Fights TV (1080p) [Not 24/7]
https://live-k2302-kbp.1plus1.video/sport/smil:sport.smil/playlist.m3u8
#EXTINF:-1 tvg-id="KSASports1.sa" tvg-logo="https://i.imgur.com/ONKNOAp.png" group-title="Sports",KSA Sports 1 (1080p) [Not 24/7]
https://edge.taghtia.com/sa/9.m3u8
#EXTINF:-1 tvg-id="KSASports2.sa" tvg-logo="https://i.imgur.com/v8ULLqg.png" group-title="Sports",KSA Sports 2 (1080p) [Not 24/7]
https://edge.taghtia.com/sa/10.m3u8
#EXTINF:-1 tvg-id="KSASports3.sa" tvg-logo="https://i.imgur.com/BXfCvez.png" group-title="Sports",KSA Sports 3 (1080p) [Not 24/7]
https://edge.taghtia.com/sa/16.m3u8
#EXTINF:-1 tvg-id="KSASports4.sa" tvg-logo="https://i.imgur.com/TNZEKP6.png" group-title="Sports",KSA Sports 4 (1080p) [Not 24/7]
https://edge.taghtia.com/sa/17.m3u8
#EXTINF:-1 tvg-id="LaxSportsNetworkTV.us" tvg-logo="https://i.imgur.com/Lt9ZUYA.png" group-title="Sports",Lax Sports Network TV (720p)
https://1840769862.rsc.cdn77.org/FTF/LSN_SCTE.m3u8
#EXTINF:-1 tvg-id="M4Sport.hu" tvg-logo="https://i.imgur.com/TQ4uJZk.png" group-title="Sports",M4 Sport (1080p)
http://146.59.85.40:89/m4hd/index.m3u8
#EXTINF:-1 tvg-id="MNetSport.mk" tvg-logo="https://i.imgur.com/7k8ar1Z.png" group-title="Sports",M-Net Sport (720p)
http://ares.mnet.mk/hls/mnet-sport.m3u8
#EXTINF:-1 tvg-id="MadeinBOTV.it" tvg-logo="https://i.imgur.com/47X44DD.png" group-title="Sports",MadeinBO TV (1080p)
https://srvx1.selftv.video/dmchannel/live/playlist.m3u8
#EXTINF:-1 tvg-id="Match4.hu" tvg-logo="https://i.imgur.com/hzexBLX.png" group-title="Sports",Match4
http://194.76.186.33:8000/play/a04d/index.m3u8
#EXTINF:-1 tvg-id="MAVTVSelect.us" tvg-logo="https://i.imgur.com/O4bSCt1.png" group-title="Sports",MavTV Select (720p)
https://mavtv-mavtvglobal-1-eu.rakuten.wurl.tv/playlist.m3u8
#EXTINF:-1 tvg-id="MMAJunkie.us" tvg-logo="https://i.imgur.com/nSUiODh.jpg" group-title="Sports",MMA Junkie (720p)
https://a.jsrdn.com/broadcast/80f6ba72c8/+0000/c.m3u8
#EXTINF:-1 tvg-id="MNBSport.mn" tvg-logo="https://i.imgur.com/z854PC3.png" group-title="Sports",MNB Sport (576p)
https://live.mnb.mn/live/mnb_sport.stream/playlist.m3u8
#EXTINF:-1 tvg-id="MonterricoTV.pe" tvg-logo="https://i.imgur.com/SuVO9T7.png" group-title="Sports",Monterrico TV (1080p) [Not 24/7]
https://ed3od.live.opencaster.com/jcpstream_hd720/index.m3u8
#EXTINF:-1 tvg-id="MoreThanSportsTV.de" tvg-logo="https://i.imgur.com/SLrjImc.png" group-title="Sports",More Than Sports TV (1080p)
https://mts1.iptv-playoutcenter.de/mts/mts-web/playlist.m3u8
#EXTINF:-1 tvg-id="MRTVSports.mm" tvg-logo="https://i.imgur.com/cFTR4kC.png" group-title="Sports",MRTV Sports (480p)
http://183.89.246.119:8881/play/a07q/index.m3u8
#EXTINF:-1 tvg-id="NBATV.us" tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/NBA_TV.svg/512px-NBA_TV.svg.png" group-title="Sports",NBA TV (720p)
http://line.gofast-tv.me/play/live.php?extension=ts&mac=00:1A:79:6F:5A:5D&stream=749756
#EXTINF:-1 tvg-id="NESN.us" tvg-logo="https://i.imgur.com/Lv1bUG5.png" group-title="Sports",NESN National (1080p)
https://bcovlive-a.akamaihd.net/bea11a7dfef34b08be06aaca4a72bcdf/us-east-1/6141518204001/playlist.m3u8
#EXTINF:-1 tvg-id="NewJapanProWrestlingWorld.jp" tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/512px-New_Japan_Pro_Wrestling_Logo_2.svg.png" group-title="Sports",New Japan Pro Wrestling World (540p)
https://aka-amd-njpwworld-hls-enlive.akamaized.net/hls/video/njpw_en/njpw_en_channel01_3/playlist_DVR.m3u8
#EXTINF:-1 tvg-id="NitroCircus.us" tvg-logo="https://i.imgur.com/Ri0sB6I.jpg" group-title="Sports",Nitro Circus (720p)
https://dai2.xumo.com/amagi_hls_data_xumo1212A-redboxnitrocircus/CDN/playlist.m3u8
#EXTINF:-1 tvg-id="NTVSpor.tr" tvg-logo="https://i.imgur.com/5pvsIsL.png" group-title="Sports",NTV Spor
http://46.4.193.238:8484/hls/ntvspor/playlist.m3u8
#EXTINF:-1 tvg-id="NWSport1.tg" tvg-logo="https://www.lyngsat.com/logo/tv/nn/new-world-tv-tg.png" group-title="Sports",NW Sport 1 (576p)
https://hls.newworldtv.com/nw-sport-1/video/live.m3u8
#EXTINF:-1 tvg-id="NWSport2.tg" tvg-logo="https://www.lyngsat.com/logo/tv/nn/new-world-tv-tg.png" group-title="Sports",NW Sport 2 (576p)
https://hls.newworldtv.com/nw-sport-2/video/live.m3u8
#EXTINF:-1 tvg-id="OmanSportsTV.om" tvg-logo="https://i.imgur.com/1omi7p8.png" group-title="Sports",Oman Sports TV (1080p) [Not 24/7]
https://partneta.cdn.mgmlcdn.com/omsport/smil:omsport.stream.smil/chunklist.m3u8
#EXTINF:-1 tvg-id="OneGolf.pk" tvg-logo="https://i.imgur.com/7JhaEW5.png" group-title="Sports",One Golf (720p)
http://162.250.201.58:6211/pk/ONEGOLF/index.m3u8
#EXTINF:-1 tvg-id="ORFSportPlus.at" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/ORF_Sport%2B.svg/512px-ORF_Sport%2B.svg.png" group-title="Sports",ORF Sport+ (540p) [Geo-blocked]
https://orfs.mdn.ors.at/out/u/orfs/qxb/manifest.m3u8
#EXTINF:-1 tvg-id="OvacionTV.pe" tvg-logo="https://i.imgur.com/7Xndgxk.png" group-title="Sports",Ovacion TV (720p) [Not 24/7]
http://cdn2.ujjina.com:1935/iptvovacion1/liveovacion1tv/playlist.m3u8
#EXTINF:-1 tvg-id="Pac12Insider.us" tvg-logo="https://i.imgur.com/736QREy.png" group-title="Sports",Pac 12 Insider (1080p) [Not 24/7]
https://pac12-redbox.amagi.tv/hls/amagi_hls_data_pac-12AAA-pac12-redbox/CDN/playlist.m3u8
#EXTINF:-1 tvg-id="PBRRidePass.us" tvg-logo="https://i.imgur.com/gUxH97E.png" group-title="Sports",PBR RidePass [Geo-blocked]
https://stitcher-ipv4.pluto.tv/stitch/hls/channel/60d39387706fe50007fda8e8/master.m3u8?already_redirected=true&appVersion=0&deviceDNT=0&deviceId=0&deviceMake=0&deviceModel=0&deviceType=0&deviceVersion=0&sid=62f4
#EXTINF:-1 tvg-id="PersianaSports.fr" tvg-logo="https://i.ibb.co/q1XfMN9/Persiana-Sports.png" group-title="Sports",Persiana Sports (720p)
https://af.ayas.ir/hls2/persiana.m3u8
#EXTINF:-1 tvg-id="PlayersTV.ca" tvg-logo="https://i.imgur.com/OC3O87c.png" group-title="Sports",Players TV (1080p)
https://playerstv-roku-us.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-id="BellatorMMA.us" tvg-logo="https://i.imgur.com/VBKoLHk.png" group-title="Sports",Pluto TV Bellator MMA (720p)
https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ebc8688f3697d00072f7cf8/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5ebc8688f3697d00072f7cf8&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=730&terminate=false&userId=
#EXTINF:-1 tvg-id="PlutoTVDeportes.us" tvg-logo="https://i.imgur.com/0pDy6f4.png" group-title="Sports",Pluto TV Deportes (720p)
https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5dcde07af1c85b0009b18651/master.m3u8?advertisingId=&appName=web&appVersion=5.14.0-0f5ca04c21649b8c8aad4e56266a23b96d73b83a&app_name=web&clientDeviceType=0&clientID=6fbead95-26b1-415d-998f-1bdef62d10be&clientModelNumber=na&deviceDNT=false&deviceId=6fbead95-26b1-415d-998f-1bdef62d10be&deviceLat=19.4358&deviceLon=-99.1441&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=88.0.4324.150&marketingRegion=VE&serverSideAds=false&sessionID=b8e5a857-714a-11eb-b532-0242ac110002&sid=b8e5a857-714a-11eb-b532-0242ac110002&userId=
#EXTINF:-1 tvg-id="PlutoTVExtremeFrance.fr" tvg-logo="https://i.imgur.com/b1xrzns.png" group-title="Sports",Pluto TV Extrême (480p)
https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5f8ed327f9e9b0000761141e/master.m3u8?advertisingId=&appName=web&appVersion=5.14.0-0f5ca04c21649b8c8aad4e56266a23b96d73b83a&app_name=web&clientDeviceType=0&clientID=6fbead95-26b1-415d-998f-1bdef62d10be&clientModelNumber=na&deviceDNT=false&deviceId=6fbead95-26b1-415d-998f-1bdef62d10be&deviceLat=48.8582&deviceLon=2.3387&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=88.0.4324.150&marketingRegion=FR&serverSideAds=false&sessionID=cc7dc550-6be3-11eb-9c02-0242ac110002&sid=cc7dc550-6be3-11eb-9c02-0242ac110002&userId=
#EXTINF:-1 tvg-id="Fight.us" tvg-logo="https://i.imgur.com/bBv4p5K.png" group-title="Sports",Pluto TV Fight (720p)
https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ad9bda9fd87eb3a2717cce0/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=1&deviceId=5ad9bda9fd87eb3a2717cce0&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=DE&serverSideAds=false&sid=5c2fb668-242f-4e7f-a025-087099fd0aca&terminate=false&userId=
#EXTINF:-1 tvg-id="PlutoTVGloryKickboxing.us" tvg-logo="https://i.imgur.com/tS7Ub7i.png" group-title="Sports",Pluto TV Glory Kickboxing (720p)
https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ad9be1be738977e2c312134/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=1&deviceId=5ad9be1be738977e2c312134&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=DE&serverSideAds=false&sid=f6e88030-d7c8-47c8-8fed-7e24dd0a038a&terminate=false&userId=
#EXTINF:-1 tvg-id="MLB.us" tvg-logo="https://i.imgur.com/ym3su2J.png" group-title="Sports",Pluto TV MLB (720p)
https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5e66968a70f34c0007d050be/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS
#EXTINF:-1 tvg-id="NFLChannel.us" tvg-logo="https://i.imgur.com/mPGtwAP.png" group-title="Sports",Pluto TV NFL Channel (720p)
https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ced7d5df64be98e07ed47b6/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5ced7d5df64be98e07ed47b6&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=708&terminate=false&userId=
#EXTINF:-1 tvg-id="PGATour.us" tvg-logo="https://i.imgur.com/J0TY9dG.png" group-title="Sports",Pluto TV PGA TOUR (720p)
https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5de94dacb394a300099fa22a/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=5de94dacb394a300099fa22a&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=713&terminate=false&userId=
#EXTINF:-1 tvg-id="PlutoTVActionSports.us" tvg-logo="https://i.imgur.com/fmyakPG.png" group-title="Sports",Pluto TV Pluto Action Sports (720p)
https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5be1be871843b56328bc3ef1/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=1&deviceId=5be1be871843b56328bc3ef1&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=DE&serverSideAds=false&sid=8a1b4593-8596-4ff8-8720-2c3271ea36ca&terminate=false&userId=
#EXTINF:-1 tvg-id="PlutoTVQwestTVJazzBeyond.us" tvg-logo="https://i.imgur.com/hT6m7aG.png" group-title="Sports",Pluto TV Qwest TV Jazz & Beyond (720p)
https://siloh.pluto.tv/lilo/production/QwestJazz/master.m3u8
#EXTINF:-1 tvg-id="PlutoTVSportItaly.it" tvg-logo="https://i.imgur.com/y22ElOr.png" group-title="Sports",Pluto TV Sport Italy (720p)
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/608030eff4b6f70007e1684c/master.m3u8?advertisingId={PSID}&appVersion=unknown&deviceDNT={TARGETOPT}&deviceId={PSID}&deviceLat=0&deviceLon=0&deviceMake=samsung&deviceModel=samsung&deviceType=samsung-tvplus&deviceVersion=unknown&embedPartner=samsung-tvplus&profileFloor=&profileLimit=&samsung_app_domain={APP_DOMAIN}&samsung_app_name={APP_NAME}&us_privacy=1YNY
#EXTINF:-1 tvg-id="PlutoTVSportsUK.uk" tvg-logo="https://i.imgur.com/LW77x7g.png" group-title="Sports",Pluto TV Sports (720p)
https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ad9bb941b95267e225e59c2/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=1&deviceId=5ad9bb941b95267e225e59c2&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=DE&serverSideAds=false&sid=b22749b0-ca0e-4663-8bb3-d83febbbb89f&terminate=false&userId=
#EXTINF:-1 tvg-id="PlutoTVSurfGermany.de" tvg-logo="https://i.imgur.com/xB6mLeg.png" group-title="Sports",Pluto TV Surf (720p)
https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5d1ce51dbaca4afdb7abfe5f/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=1&deviceId=5d1ce51dbaca4afdb7abfe5f&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=DE&serverSideAds=false&sid=abec40e3-86b9-48b6-981d-dc5eeecc6cf9&terminate=false&userId=
#EXTINF:-1 tvg-id="PokerTV.fr" tvg-logo="https://i.imgur.com/tArvcvj.png" group-title="Sports",Poker TV (720p)
https://hls.pokertvfa.live/hls/stream.m3u8
#EXTINF:-1 tvg-id="QazSport.kz" tvg-logo="https://i.imgur.com/UDJ0P5Q.png" group-title="Sports",QazSport (480p) [Geo-blocked]
https://qazsporttv-stream.qazcdn.com/qazsporttv/qazsporttv/playlist.m3u8
#EXTINF:-1 tvg-id="Racingcom.au" tvg-logo="https://i.imgur.com/Q55HX1O.png" group-title="Sports",Racing.com (720p)
https://racingvic-i.akamaized.net/hls/live/598695/racingvic/index1500.m3u8
#EXTINF:-1 tvg-id="RealitateaSportiva.ro" tvg-logo="https://i.imgur.com/BaEyZto.png" group-title="Sports",Realitatea Sportivă (720p)
https://streamx.realitatea.net/realitatea/sportiva_md/playlist.m3u8
#EXTINF:-1 tvg-id="RealMadridTV.es" tvg-logo="https://i.imgur.com/5pMo7dL.png" group-title="Sports",RealMadrid TV
https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01201-cinedigmenterta-realmadrid-cineverse/playlist.m3u8
#EXTINF:-1 tvg-id="RedBullTV.at" tvg-logo="https://i.imgur.com/BcN8B3D.png" group-title="Sports",Red Bull TV (1080p)
https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8
#EXTINF:-1 tvg-id="RTASport.af" tvg-logo="https://i.imgur.com/AsqVIp7.png" group-title="Sports",RTA Sport (720p)
https://hls.rtasport.live/hls/stream.m3u8
#EXTINF:-1 tvg-id="SanMarinoRTVSport.sm" tvg-logo="https://i.imgur.com/PGm944g.png" group-title="Sports",San Marino RTV Sport (720p)
https://d2hrvno5bw6tg2.cloudfront.net/smrtv-ch02/smil:ch-02.smil/master.m3u8
#EXTINF:-1 tvg-id="SEOTV5Deportes.bo" tvg-logo="https://i.imgur.com/N56B7si.png" group-title="Sports",SEO TV 5 Deportes (1080p) [Not 24/7]
https://live.seo.tv.bo/live/5SEO.m3u8
#EXTINF:-1 tvg-id="SharjahSports.ae" tvg-logo="https://i.imgur.com/IaRaabJ.jpg" group-title="Sports",Sharjah Sports TV (1080p)
https://svs.itworkscdn.net/smc4sportslive/smc4.smil/playlist.m3u8
#EXTINF:-1 tvg-id="SKITV.ch" tvg-logo="https://i.imgur.com/S6qgwLG.png" group-title="Sports",SKI TV (1080p) [Not 24/7]
https://d2xeo83q8fcni6.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/SkiTV-SportsTribal/193.m3u8
#EXTINF:-1 tvg-id="SkyRacing1.au" tvg-logo="https://i.imgur.com/Hf0EiaW.png" group-title="Sports",Sky Racing 1 [Geo-blocked]
https://skylivetab-new.akamaized.net/hls/live/2038780/sky1/index.m3u8
#EXTINF:-1 tvg-id="SkyRacing2.au" tvg-logo="https://i.imgur.com/TxQvFnQ.png" group-title="Sports",Sky Racing 2 [Geo-blocked]
https://skylivetab-new.akamaized.net/hls/live/2038781/sky2/index.m3u8
#EXTINF:-1 tvg-id="SkyThoroughbredCentral.au" tvg-logo="https://i.imgur.com/1SxIsnw.png" group-title="Sports",Sky Thoroughbred Central [Geo-blocked]
https://skylivetab-new.akamaized.net/hls/live/2038782/stcsd/index.m3u8
#EXTINF:-1 tvg-id="SportenFrance.fr" tvg-logo="https://i.imgur.com/1IXQoWq.png" group-title="Sports",Sport En France (1080p)
https://sp1564435593.mytvchain.info/live/sp1564435593/index.m3u8
#EXTINF:-1 tvg-id="Sportitalia24.it" tvg-logo="https://i.imgur.com/RSwnoLn.png" group-title="Sports",Sportitalia 24 (720p) [Geo-blocked]
https://di-yx2saj20.vo.lswcdn.net/sportitalia/smil:silive24.smil/playlist.m3u8
#EXTINF:-1 tvg-id="Sportitalia.it" tvg-logo="https://i.imgur.com/0CJGGgd.png" group-title="Sports",Sportitalia (720p) [Geo-blocked]
https://di-yx2saj20.vo.lswcdn.net/sportitalia/smil:sportitaliahd.smil/playlist.m3u8
#EXTINF:-1 tvg-id="SportitaliaMotori.it" tvg-logo="https://i.imgur.com/hu56Ya5.png" group-title="Sports",Sportitalia Motori (720p) [Geo-blocked]
https://di-yx2saj20.vo.lswcdn.net/sportitalia/smil:simotori.smil/playlist.m3u8
#EXTINF:-1 tvg-id="SportitaliaSolocalcio.it" tvg-logo="https://i.imgur.com/hu56Ya5.png" group-title="Sports",Sportitalia SoloCalcio
https://di-g7ij0rwh.vo.lswcdn.net/sportitalia/sisolocalcio.smil/playlist.m3u8
#EXTINF:-1 tvg-id="Sports181HD.in" tvg-logo="https://i.ibb.co/NmVCXhz/IMG-20230610-135938.jpg" group-title="Sports",Sports18 1 HD (1080p)
https://prod-sports-north-gm.jiocinema.com/bpk-tv/Sports18_1_HD_voot_MOB/Fallback/index.m3u8
#EXTINF:-1 tvg-id="SportsConnect.za" tvg-logo="https://i.imgur.com/CZ2wQig.png" group-title="Sports",Sports Connect (720p)
https://origin3.afxp.telemedia.co.za/PremiumFree/sportsconnect/playlist.m3u8
#EXTINF:-1 tvg-id="SportsTV.tr" tvg-logo="https://i.imgur.com/tGTVcVe.jpg" group-title="Sports",Sports TV (720p) [Geo-blocked]
https://live.sportstv.com.tr/hls/low/sportstv.m3u8
#EXTINF:-1 tvg-id="SportsTVPlus.us" tvg-logo="https://i.imgur.com/EyCDhgN.png" group-title="Sports",Sports TV Plus (1080p)
https://dai.google.com/linear/hls/event/9FKrAqCfRvGfn3tPbVFO-g/master.m3u8
#EXTINF:-1 tvg-id="SportsGrid.us" tvg-logo="https://i.imgur.com/ulGKX30.png" group-title="Sports",SportsGrid (1080p)
https://dai2.xumo.com/amagi_hls_data_xumo1212A-xumosportsgrid/CDN/master.m3u8
#EXTINF:-1 tvg-id="Sportskool.us" tvg-logo="https://i.imgur.com/R6FsKYj.png" group-title="Sports",Sportskool TV (720p)
https://a.jsrdn.com/broadcast/fabeab4b08/+0000/c.m3u8
#EXTINF:-1 tvg-id="SportsMax.jm" tvg-logo="https://i.imgur.com/FBYjSCt.png" group-title="Sports",SportsMax (720p)
http://cdn.tvmatic.net/sport.m3u8
#EXTINF:-1 tvg-id="Sportswire.us" tvg-logo="https://i.imgur.com/EyTwfjh.png" group-title="Sports",Sportswire (1080p)
https://dai.google.com/linear/hls/event/8R__yZf7SR6yMb-oTXgbEQ/master.m3u8
#EXTINF:-1 tvg-id="SportyStuffTV.uk" tvg-logo="https://i.imgur.com/6s1YGSV.png" group-title="Sports",SportyStuff TV (1080p)
https://ayozat-live.secure2.footprint.net/egress/bhandler/ayozat/sportystufftv/manifest.m3u8
#EXTINF:-1 tvg-id="SPOTV2.kr" tvg-logo="https://i.imgur.com/YD8fbTH.png" group-title="Sports",SPOTV2 (1080p)
https://bcovlive-a.akamaihd.net/48eee16919834d3b97df1082a649bcfa/ap-northeast-1/6271486521001/playlist.m3u8
#EXTINF:-1 tvg-id="SPOTV.kr" tvg-logo="https://i.imgur.com/HaoVsm5.png" group-title="Sports",SPOTV (1080p)
https://bcovlive-a.akamaihd.net/99545824f51f4c1592b35314c6ece3b0/ap-northeast-1/6271486521001/playlist.m3u8
#EXTINF:-1 tvg-id="SSCActionWaleed.sa" tvg-logo="https://i.imgur.com/agc0IZF.png" group-title="Sports",SSC Action Waleed (1080p) [Not 24/7]
https://shls-live-event2-prod-dub.shahid.net/out/v1/0456ede1a39145d98b3d8c8062ddc998/index.m3u8
#EXTINF:-1 tvg-id="Stadium.us" tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Stadium_%28sports_network%29_logo.svg/512px-Stadium_%28sports_network%29_logo.svg.png" group-title="Sports",Stadium (720p)
https://dai2.xumo.com/amagi_hls_data_xumo1234A-stadiumsports/CDN/master.m3u8
#EXTINF:-1 tvg-id="MAVTV.us" tvg-logo="https://i.imgur.com/4fqvwEk.png" group-title="Sports",STIRR MavTV (720p)
https://dai.google.com/linear/hls/event/YoBM0ae5Q62TPdrfFHS4RQ/master.m3u8
#EXTINF:-1 tvg-id="SuperTennis.it" tvg-logo="https://upload.wikimedia.org/wikipedia/it/thumb/6/6a/SuperTennis_-_Logo_2016.svg/512px-SuperTennis_-_Logo_2016.svg.png" group-title="Sports",Super Tennis (1080p)
https://supertennix-l3-live1.secure.footprint.net/restreamer/supertennix_client/gpu-a-c0-16/restreamer/rtmp/hls/h24_supertennix/manifest.m3u8
#EXTINF:-1 tvg-id="SwerveSports.us" tvg-logo="https://i.imgur.com/GT0Yi2T.png" group-title="Sports",Swerve Sports (1080p)
https://dai.google.com/linear/hls/event/5qa-mJF2R0iBw8S1JwF7FQ/master.m3u8
#EXTINF:-1 tvg-id="TDMSports.mo" tvg-logo="https://i.imgur.com/HNjL3B2.png" group-title="Sports",TDM Sports Ch. 93 (720p)
https://live3.tdm.com.mo/ch4/sport_ch4.live/playlist.m3u8
#EXTINF:-1 tvg-id="Teledeporte.es" tvg-logo="https://i.imgur.com/b0H5f62.png" group-title="Sports",Teledeporte (576p) [Geo-blocked]
https://rtvelivestream.akamaized.net/rtvesec/tdp/tdp_main.m3u8
#EXTINF:-1 tvg-id="TeletrakTV.cl" tvg-logo="https://i.imgur.com/NoJvlig.png" group-title="Sports",Teletrak (720p)
https://unlimited6-cl.dps.live/sportinghd/sportinghd.smil/playlist.m3u8
#EXTINF:-1 tvg-id="TennisChannel.us" tvg-logo="https://i.imgur.com/tsljAnY.png" group-title="Sports",Tennis Channel
https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01444-tennischannelth-tennischannelnl-samsungnl/playlist.m3u8
#EXTINF:-1 tvg-id="TNTSportsBrazil.br" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/TNT_Sports_2021_logo.svg/512px-TNT_Sports_2021_logo.svg.png" group-title="Sports",TNT Sports 1 Brasil (720p) [Not 24/7]
https://glxlmn026c.singularcdn.net.br/playout_01/playlist.m3u8
#EXTINF:-1 tvg-id="TNTSports2Brazil.br" tvg-logo="https://i.imgur.com/E6pLvOV.png" group-title="Sports",TNT Sports 2 Brasil (720p) [Not 24/7]
https://glxlmn026c.singularcdn.net.br/playout_02/playlist.m3u8
#EXTINF:-1 tvg-id="TNTSports3Brazil.br" tvg-logo="https://i.imgur.com/LFSMbpN.png" group-title="Sports",TNT Sports 3 Brasil (720p) [Not 24/7]
https://glxlmn026c.singularcdn.net.br/playout_03/playlist.m3u8
#EXTINF:-1 tvg-id="TNTSports4Brazil.br" tvg-logo="https://i.imgur.com/Am70nWY.png" group-title="Sports",TNT Sports 4 Brasil (720p) [Not 24/7]
https://glxlmn026c.singularcdn.net.br/playout_04/playlist.m3u8
#EXTINF:-1 tvg-id="TNTSports5Brazil.br" tvg-logo="https://i.imgur.com/XA3zxEE.png" group-title="Sports",TNT Sports 5 Brasil (720p) [Not 24/7]
https://glxlmn026c.singularcdn.net.br/playout_05/playlist.m3u8
#EXTINF:-1 tvg-id="TRSport.it" tvg-logo="https://i.imgur.com/ELXmaqg.png" group-title="Sports",TR Sport (480p)
https://livetr.teleromagna.it/mia/live/playlist.m3u8
#EXTINF:-1 tvg-id="TraceSportStars.fr" tvg-logo="https://i.imgur.com/FabFP5A.png" group-title="Sports",Trace Sport Stars (1080p) [Geo-blocked]
http://tracesportstars-samsunges.amagi.tv/hls/amagi_hls_data_samsunguk-tracesport-samsungspain/CDN/playlist.m3u8
#EXTINF:-1 tvg-id="TRTSpor.tr" tvg-logo="https://i.imgur.com/pCjzh5A.png" group-title="Sports",TRT Spor (720p) [Geo-blocked]
https://tv-trtspor1.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="TRTSporYildiz.tr" tvg-logo="https://i.imgur.com/MJPoj3j.png" group-title="Sports",TRT Spor Yildiz (720p) [Geo-blocked]
https://tv-trtspor2.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="TruePremierFootball1.th" tvg-logo="https://i.imgur.com/goTVVel.png" group-title="Sports" user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.3809.25 Safari/537.36",True Premier Football HD 1 (720p) [Not 24/7]
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.3809.25 Safari/537.36
https://smart-tv.livedoomovie.com:4431/02_PremierHD1_720p/chunklist.m3u8
#EXTINF:-1 tvg-id="TruePremierFootball2.th" tvg-logo="https://i.imgur.com/EodqrAZ.png" group-title="Sports" user-agent="Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36",True Premier Football HD 2 (720p) [Not 24/7]
#EXTVLCOPT:http-user-agent=Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36
https://smart-tv.livedoomovie.com:4431/02_PremierHD2_720p/chunklist.m3u8
#EXTINF:-1 tvg-id="TruePremierFootball3.th" tvg-logo="https://i.imgur.com/0PqRci8.png" group-title="Sports" user-agent="Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36",True Premier Football HD 3 (720p) [Not 24/7]
#EXTVLCOPT:http-user-agent=Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36
https://smart-tv.livedoomovie.com:4431/02_PremierHD3_720p/chunklist.m3u8
#EXTINF:-1 tvg-id="TruePremierFootball4.th" tvg-logo="https://i.imgur.com/IuurqFv.png" group-title="Sports" user-agent="Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36",True Premier Football HD 4 (720p) [Not 24/7]
#EXTVLCOPT:http-user-agent=Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36
https://smart-tv.livedoomovie.com:4431/02_PremierHD4_720p/chunklist.m3u8
#EXTINF:-1 tvg-id="TruePremierFootball5.th" tvg-logo="https://i.imgur.com/xkqzy95.png" group-title="Sports" user-agent="Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36",True Premier Football HD 5 (720p) [Not 24/7]
#EXTVLCOPT:http-user-agent=Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36
https://smart-tv.livedoomovie.com:4431/02_PremierHD5_720p/chunklist.m3u8
#EXTINF:-1 tvg-id="TrueTennis.th" tvg-logo="https://i.imgur.com/Zu72OYA.png" group-title="Sports" user-agent="Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36",True Tennis HD (720p) [Not 24/7]
#EXTVLCOPT:http-user-agent=Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36
https://smart-tv.livedoomovie.com:4431/02_TennisHD_720p/chunklist.m3u8
#EXTINF:-1 tvg-id="TrueSports1.th" tvg-logo="https://i.imgur.com/JGXzw5v.png" group-title="Sports" user-agent="Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36",TrueSports 1 HD (720p) [Not 24/7]
#EXTVLCOPT:http-user-agent=Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36
https://smart-tv.livedoomovie.com:4431/02_2sporthd1_720p/chunklist.m3u8
#EXTINF:-1 tvg-id="TrueSports2.th" tvg-logo="https://i.imgur.com/l11xhF2.png" group-title="Sports" user-agent="Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36",TrueSports 2 HD (720p) [Not 24/7]
#EXTVLCOPT:http-user-agent=Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36
https://smart-tv.livedoomovie.com:4431/02_2sporthd2_720p/chunklist.m3u8
#EXTINF:-1 tvg-id="TrueSports3.th" tvg-logo="https://i.imgur.com/rsAqjtw.png" group-title="Sports" user-agent="Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36",TrueSports 3 HD (720p) [Not 24/7]
#EXTVLCOPT:http-user-agent=Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36
https://smart-tv.livedoomovie.com:4431/02_2sporthd3_720p/chunklist.m3u8
#EXTINF:-1 tvg-id="TrueSports4.th" tvg-logo="https://i.imgur.com/WxAQArO.png" group-title="Sports" user-agent="Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36",TrueSports 4 HD (720p) [Not 24/7]
#EXTVLCOPT:http-user-agent=Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36
https://smart-tv.livedoomovie.com:4431/02_2sporthd4_720p/chunklist.m3u8
#EXTINF:-1 tvg-id="TrueSports5.th" tvg-logo="https://i.imgur.com/XlIQTJR.png" group-title="Sports" user-agent="Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36",TrueSports 5 (480p Scaled) (720p) [Not 24/7]
#EXTVLCOPT:http-user-agent=Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36
https://smart-tv.livedoomovie.com:4431/02_sport5_480p/chunklist.m3u8
#EXTINF:-1 tvg-id="TrueSports7.th" tvg-logo="https://i.imgur.com/bW79Nal.png" group-title="Sports" user-agent="Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36",TrueSports 7 (480p Scaled) (720p) [Not 24/7]
#EXTVLCOPT:http-user-agent=Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/96.0.3809.25 Safari/537.36
https://smart-tv.livedoomovie.com:4431/02_sport7_480p/chunklist.m3u8
#EXTINF:-1 tvg-id="TurfMovil.cl" tvg-logo="https://i.imgur.com/TwIe4lK.png" group-title="Sports",Turf Móvil (720p)
https://janus.tvturf.cl/playlist/stream.m3u8
#EXTINF:-1 tvg-id="TurkmenistanSport.tm" tvg-logo="https://turkmentv.gov.tm/assets/img/live-imgs/sport.png" group-title="Sports",Türkmenistan Sport (406p) [Not 24/7]
https://alpha.tv.online.tm/hls/ch004.m3u8
#EXTINF:-1 tvg-id="TV2Sport1.no" tvg-logo="https://i.imgur.com/asKHqNZ.png" group-title="Sports",TV 2 Sport 1 (720p)
https://ws31-hls-live.akamaized.net/out/u/1416253.m3u8
#EXTINF:-1 tvg-id="TVBFinanceSportsInformationChannel.hk" tvg-logo="https://i.imgur.com/Fkkp7x7.png" group-title="Business;Sports" user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 Edge/12.246",TVB Finance and Sport Channel (720p)
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 Edge/12.246
https://cdn.hklive.tv/xxxx/85/index.m3u8
#EXTINF:-1 tvg-id="TVMaticFight.br" tvg-logo="https://i.imgur.com/l5PBcKN.png" group-title="Sports",TVMatic Fight (720p)
http://cdn.tvmatic.net/fight.m3u8
#EXTINF:-1 tvg-id="TVMax.pa" tvg-logo="https://i.imgur.com/XcrkfGh.png" group-title="Sports",TVMAX (720p)
https://bcovlive-a.akamaihd.net/474b6caf58f8407fb1d1cc1ef64f50ff/us-west-2/6058004209001/playlist_dvr.m3u8
#EXTINF:-1 tvg-id="TVRISport.id" tvg-logo="https://i.imgur.com/HSnXywC.png" group-title="Sports",TVRI Sport (720p)
http://ott.tvri.co.id/Content/HLS/Live/Channel(TVRI4)/index.m3u8
#EXTINF:-1 tvg-id="TVSBoxing.us" tvg-logo="https://i.imgur.com/30ZoF75.png" group-title="Sports",TVS Boxing (360p)
https://rpn1.bozztv.com/36bay2/gusa-tvsboxing/index.m3u8
#EXTINF:-1 tvg-id="TVSClassicSports.us" tvg-logo="https://i.imgur.com/auR0Mi6.png" group-title="Sports",TVS Classic Sports (360p)
https://rpn1.bozztv.com/36bay2/gusa-tvs/index.m3u8
#EXTINF:-1 tvg-id="TVSSports.us" tvg-logo="https://i.imgur.com/Lwwq62E.png" group-title="Sports",TVS Sports (720p) [Not 24/7]
https://rpn1.bozztv.com/36bay2/gusa-tvssports/index.m3u8
#EXTINF:-1 tvg-id="TVSSportsBureau.us" tvg-logo="https://i.imgur.com/pXOyNEy.png" group-title="Sports",TVS Sports Bureau (720p)
https://rpn1.bozztv.com/36bay2/gusa-tvssportsbureau/index.m3u8
#EXTINF:-1 tvg-id="TVSTurbo.us" tvg-logo="https://i.imgur.com/7zYIbU1.png" group-title="Sports",TVS Turbo (360p)
https://rpn1.bozztv.com/36bay2/gusa-tvsturbo/index.m3u8
#EXTINF:-1 tvg-id="TVSWomenSports.us" tvg-logo="https://i.imgur.com/8hC4PfF.png" group-title="Sports",TVS Women Sports (720p)
https://rpn1.bozztv.com/36bay2/gusa-tvswsn/index.m3u8
#EXTINF:-1 tvg-id="UDTV.es" tvg-logo="https://i.ibb.co/GJzmcPz/union-deportiva-las-palmas-tv-en-directo.png" group-title="Sports",UD Las Palmas TV (1080p)
https://cdn318.fractalmedia.es/live319/hls/cudtv/high/index.m3u8
#EXTINF:-1 tvg-id="Unbeaten.us" tvg-logo="https://i.imgur.com/LmkNt3v.png" group-title="Sports",Unbeaten (1080p)
https://unbeaten-tcl.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-id="USATODAYSPORTS.us" tvg-logo="https://i.imgur.com/vOd437K.png" group-title="Sports",USA Today SportsWire
https://lnc-sportswire.tubi.video/playlist.m3u8
#EXTINF:-1 tvg-id="VinxTV.es" tvg-logo="https://i.imgur.com/6EGV2eo.png" group-title="Sports",Vinx TV (1080p)
https://vinx.radiocast.es:5443/LiveApp/streams/vinxtv.m3u8
#EXTINF:-1 tvg-id="W14DKD5.us" tvg-logo="https://i.imgur.com/D4mZ8ll.png" group-title="Sports",W14DK-D 14.5 All Sports Television Network
https://2-fss-2.streamhoster.com/pl_118/204972-2205186-1/playlist.m3u8
#EXTINF:-1 tvg-id="WAPADT2.pr" tvg-logo="https://i.imgur.com/5WNBFmp.png" group-title="Sports",WAPA-DT2 (WAPA Deportes) (1080p)
https://live.field59.com/wapa/wapa2/playlist.m3u8
#EXTINF:-1 tvg-id="WorldofFreesports.de" tvg-logo="https://i.imgur.com/lta5Mog.png" group-title="Sports",World of Freesports (720p)
https://a.jsrdn.com/broadcast/ab14783a09/+0000/c.m3u8
#EXTINF:-1 tvg-id="WorldPokerTour.us" tvg-logo="https://i.imgur.com/98kLMjj.png" group-title="Sports",World Poker Tour (1080p) [Not 24/7]
https://d3w4n3hhseniak.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/WPT-DistroTV/150.m3u8
#EXTINF:-1 tvg-id="WorldPokerTourItaly.it" tvg-logo="https://i.imgur.com/e3yJ9QN.png" group-title="Sports",World Poker Tour Italy (720p)
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/608016e446d73500075ea7e0/master.m3u8?advertisingId={PSID}&appVersion=unknown&deviceDNT={TARGETOPT}&deviceId={PSID}&deviceLat=0&deviceLon=0&deviceMake=samsung&deviceModel=samsung&deviceType=samsung-tvplus&deviceVersion=unknown&embedPartner=samsung-tvplus&profileFloor=&profileLimit=&samsung_app_domain={APP_DOMAIN}&samsung_app_name={APP_NAME}&us_privacy=1YNY
#EXTINF:-1 tvg-id="AstrahanRuSport.ru" tvg-logo="https://i.imgur.com/BKaEtqL.png" group-title="Sports",Астрахань.Ru Sport (720p)
https://streaming.astrakhan.ru/astrakhanrusporthd/playlist.m3u8
#EXTINF:-1 tvg-id="Belarus5.by" tvg-logo="https://i.imgur.com/NJsRFud.png" group-title="Sports",Беларусь 5 (1080p) [Not 24/7]
https://ngtrk.dc.beltelecom.by/ngtrk/smil:belarus5.smil/playlist.m3u8
#EXTINF:-1 tvg-id="Belarus5Internet.by" tvg-logo="https://i.imgur.com/rzPQ9Iz.png" group-title="Sports",Беларусь 5 Интернет (1080p) [Not 24/7]
https://ngtrk.dc.beltelecom.by/ngtrk/smil:belarus5int.smil/playlist.m3u8
#EXTINF:-1 tvg-id="RussianExtreme.ru" tvg-logo="https://i.imgur.com/qjx6zZV.png" group-title="Sports",Русский Экстрим
http://vid.extremtv.ru/hls_get/cameraFeed.m3u8
#EXTINF:-1 tvg-id="Start.ru" tvg-logo="https://i.imgur.com/VBqVkno.png" group-title="Sports",Старт (1080p)
https://strm.yandex.ru/kal/start/start0.m3u8
#EXTINF:-1 tvg-id="KTRKSport.kg" tvg-logo="https://i.imgur.com/HEiMqV6.png" group-title="Sports",УТРК Спорт (272p)
https://64e5ed58c00d4.streamlock.net/live/smil:sport.smil/playlist.m3u8
#EXTINF:-1 tvg-id="Football.ru" tvg-logo="https://i.imgur.com/pEuaZVx.png" group-title="Sports" user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",Футбол (480p)
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148
http://ott-cdn.ucom.am/s41/index.m3u8
#EXTINF:-1 tvg-id="ShandongTVSportsChannel.cn" tvg-logo="https://i.imgur.com/zX4RxvG.png" group-title="Sports",山东体育 (1080p) [Geo-blocked]
http://livealone302.iqilu.com/iqilu/typd.m3u8

`

let parseM3u = m3utojson(m3u);
