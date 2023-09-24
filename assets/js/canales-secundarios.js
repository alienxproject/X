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
#EXTINF:-1 tvg-id="4" tvg-name="anjing tv" tvg-logo="https://i.imgur.com/tHVc8on.png", anjing * | CL
https://live-k2301-kbp.1plus1.video/sport/smil:sport.smil/playlist.m3u8
#EXTINF:-1 tvg-id="4" tvg-name="AbuDhabiSports1.ae" tvg-logo="https://i.imgur.com/6BVWk8z.png" group-title="Sports",Abu Dhabi
https://admdn1.cdn.mangomolo.com/adsports1/smil:adsports1.stream.smil/playlist.m3u8
#EXTINF:-1 tvg-id="4" tvg-logo="https://i.imgur.com/qjx6zZV.png" tvg-name=="Sports",Русский Экстрим
http://vid.extremtv.ru/hls_get/cameraFeed.m3u8
#EXTINF:-1 tvg-id="6" tvg-name="1Plus1Sport" tvg-logo="https://i.imgur.com/tHVc8on.png" group-title="Sports",1+1 Спорт (720p) [Not 24/7]
https://live-k2301-kbp.1plus1.video/sport/smil:sport.smil/playlist.m3u8
#EXTINF:-1 tvg-id="6" tvg-name="ASpor" tvg-logo="https://i.imgur.com/ZhkZzLf.png" group-title="Sports",A Spor (1080p) [Not 24/7]
https://ythls.onrender.com/channel/UCJElRTCNEmLemgirqvsW63Q.m3u8
#EXTINF:-1 tvg-id="6" tvg-name="AbuDhabiSports1" tvg-logo="https://i.imgur.com/6BVWk8z.png" group-title="Sports",Abu Dhabi Sports 1 (1080p)
https://admdn1.cdn.mangomolo.com/adsports1/smil:adsports1.stream.smil/playlist.m3u8
#EXTINF:-1 tvg-id="6" tvg-name="AbuDhabiSports2" tvg-logo="https://i.imgur.com/4rVm3oZ.png" group-title="Sports",Abu Dhabi Sports 2 (1080p)
https://admdn5.cdn.mangomolo.com/adsports2/smil:adsports2.stream.smil/playlist.m3u8
#EXTINF:-1 tvg-id="6" tvg-name="ACCNetwork" tvg-logo="https://i.imgur.com/TpCkbkT.png" group-title="Sports",ACC Network (720p)
https://a.jsrdn.com/broadcast/542cb2ce3c/+0000/c.m3u8
#EXTINF:-1 tvg-id="6" tvg-name="ACISportTV" tvg-logo="https://i.imgur.com/iLXjMvB.png" group-title="Sports",ACI Sport TV (1080p)
https://g4wlk6xpy23a-hls-live.mariatvcdn.it/acisporttv/b7a3464f8e2001314de9fefebf11229d.sdp/playlist.m3u8
#EXTINF:-1 tvg-id="6" tvg-name="ADOTV" tvg-logo="https://i.imgur.com/pxFamLr.png" group-title="Sports",ADO TV (720p)
https://stream01.adotv-fm.bj/ado-tv-live/index.m3u8
#EXTINF:-1 tvg-id="6" tvg-name="AdventureSportsTV" tvg-logo="https://i.imgur.com/9oyc88J.png" group-title="Sports",Adventure Sports TV (360p) [Not 24/7]
https://gizmeon.s.llnwi.net/channellivev3/live/master.m3u8?channel=275
#EXTINF:-1 tvg-id="6" tvg-name="AioSport1" tvg-logo="https://assets.aionet.ir/channels/100347" group-title="Sports",Aio Sport 1 (480p)
https://af.ayas.ir/hls2/aiosport.m3u8
#EXTINF:-1 tvg-id="6" tvg-name="AioSport2" tvg-logo="https://assets.aionet.ir/channels/100347" group-title="Sports",Aio Sport 2 (480p) [Not 24/7]
https://af.ayas.ir/hls2/aiosport2.m3u8
#EXTINF:-1 tvg-id="6" tvg-name="AlIraqiaSport" tvg-logo="https://i.imgur.com/DrrlxTO.png" group-title="Sports",Al Iraqia Sport (1080p) [Geo-blocked]
https://livestream.almanasa.tv:8130/sport/ch6/ch6_1080.m3u8
#EXTINF:-1 tvg-id="6" tvg-name="AlfaSport" tvg-logo="https://i.imgur.com/vhMPYIW.png" group-title="Sports",Alfa Sport (1080p) [Not 24/7]
https://dev.aftermind.xyz/edge-hls/unitrust/alfasports/index.m3u8?token=8TXWzhY3h6jrzqEqu
#EXTINF:-1 tvg-id="6" tvg-name="AllSports" tvg-logo="https://i.imgur.com/wULpnYR.png" group-title="Sports",All Sports (720p)
https://5cf4a2c2512a2.streamlock.net/dgrau/dgrau/playlist.m3u8
#EXTINF:-1 tvg-id="6" tvg-name="AntenaSport.ro" tvg-logo="https://i.imgur.com/jp8VX4E.png" group-title="Sports",AntenaSport (720p) [Not 24/7]
https://stream1.antenaplay.ro/dfs/farasecrete5/playlist.m3u8

`

let parseM3u = m3utojson(m3u);
