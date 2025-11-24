// 该段为视频条目具体模板
//                 <tr>
//                     <th class="xuhao">1</th>
//                     <th class="video">
//                         <img src="./XXX.png" class="video-cover" />
//                     </th>
//                     <th>
//                         <table class="video-info">
//                             <tr>
//                                 <td colspan="2">Title: XXXXXXXXXX</td>
//                             </tr>
//                             <tr>
//                                 <td width="33%">BV1XXXXXXXX</td>
//                                 <td width="33%">Time:XXXXXXXXX</td>
//                             </tr>
//                             <tr>
//                                 <td>Vocal: XXX</td>
//                                 <td>Engine: XXX</td>
//                             </tr>
//                             <tr>
//                                 <td colspan="2">Best Grade: XXXX</td>
//                             </tr>
//                             <tr>
//                                 <td colspan="2">关联动漫社：XXX动漫社</td>
//                             </tr>
//                             <tr>
//                                 <td colspan="2">
//                                     <audio controls class="audio" title="作品试听">
//                                         <source src="XXX.mp3" type="audio/mpeg">
//                                     </audio>
//                                 </td>
//                             </tr>
//                         </table>
//                     </th>
//                 </tr>

VideoInformation = [
    [10,"Only For You", 
        "属性：原创曲\n\n策划：大冷、他城\n作词：绝非言\n作曲/编曲/混音：凌和\n调教：大冷\n曲绘：雪童子，阿也，椰十四\nPV：卷毛兔，Colanns",
    "【初音未来原创】Only For You【初音未来11周年诞生祭】",
    "BV1hW411f7fG","2018-08-31 14:10:43","初音未来","VOCALOID","周刊虚拟歌手中文曲排行榜♪318 18th","北航飞梦ACG联盟"]
];

function addVideos(year, videoinfo){
    var videoList = document.getElementById(`virtual-${year}`);
    for(videoinfo in VideoInformation){
        var xuhao = videoinfo[0];
        var songname = videoinfo[1];
        var intro = videoinfo[2];
        var title = videoinfo[3];
        var bvid = videoinfo[4];
        var time = videoinfo[5];
        var vocal = videoinfo[6];
        var engine = videoinfo[7];
        var grade = videoinfo[8];
        var club = videoinfo[9];

        videoList.innerHTML += `
        <tr>
            <th class="xuhao">${xuhao}</th>
            <th class="video">
                <img src="../${year}/图片/${songname}.jpg" class="video-cover" alt="${songname}" title="${intro}" />
            </th>
            <th>
                <table class="video-info">
                    <tr>
                        <td colspan="2">Title: ${title}</td>
                    </tr>
                    <tr>
                        <td width="33%">${bvid}</td>
                        <td width="33%">Time:${time}</td>
                    </tr>
                    <tr>
                        <td>Vocal: ${vocal}</td>
                        <td>Engine: ${engine}</td>
                    </tr>
                    <tr>
                        <td colspan="2"">Best Grade: ${grade}</td>
                    </tr>
                    <tr>
                        <td colspan="2">关联动漫社：${club}</td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <audio controls class="audio" title="作品试听">
                                <source src="../year/音视频/${bvid} ${songname}.mp3" type="audio/mpeg">
                            </audio>
                        </td>
                    </tr>
                </table>
            </th>
        </tr>
        `
    }
    
}

addVideos(2024, VideoInformation)