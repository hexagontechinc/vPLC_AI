(function(){console.log([{"name":"Intel\u00ae Atom\u2122 x5-E3940","ie_type":"engines","release":"OV-2021.1.096","tp_int8":"6.67","tp_fp16":"0","tp_fp32":"3.11","value":"0.158","efficiency":"0.701","latency":"161.81"},{"name":"Intel\u00ae Core\u2122 i3-8100","ie_type":"engines","release":"OV-2021.1.096","tp_int8":"46.65","tp_fp16":"0","tp_fp32":"30.39","value":"0.398","efficiency":"0.717","latency":"24.13"},{"name":"Intel\u00ae Core\u2122 i5-8500","ie_type":"engines","release":"OV-2021.1.096","tp_int8":"67.39","tp_fp16":"0","tp_fp32":"44.14","value":"0.35","efficiency":"1.036","latency":"16.75"},{"name":"Intel\u00ae Core\u2122 i7-8700T","ie_type":"engines","release":"OV-2021.1.096","tp_int8":"92.4","tp_fp16":"0","tp_fp32":"50.35","value":"0.304","efficiency":"2.64","latency":"14.29"},{"name":"Intel\u00ae Core\u2122 i9-10920X","ie_type":"engines","release":"OV-2021.1.096","tp_int8":"470.14","tp_fp16":"0","tp_fp32":"102.57","value":"0.671","efficiency":"2.849","latency":"4.3"},{"name":"Intel\u00ae Core\u2122 i5-1145G7E CPU-only","ie_type":"engines","release":"OV-2021.1.096","tp_int8":"139.27","tp_fp16":"0","tp_fp32":"37.83","value":"0.45","efficiency":"4.973","latency":"7.98"},{"name":"Intel\u00ae Core\u2122 i5-1145G7E GPU-only","ie_type":"engines","release":"OV-2021.1.096","tp_int8":"137.96","tp_fp16":"0","tp_fp32":"48.76","value":"0.446","efficiency":"4.927","latency":"10.03"},{"name":"Intel\u00ae Core\u2122 i5-1145G7E GPU+CPU","ie_type":"engines","release":"OV-2021.1.096","tp_int8":"240.6","tp_fp16":"0","tp_fp32":"63.29","value":"0.778","efficiency":"8.592","latency":"10.03"},{"name":"Intel\u00ae Xeon\u00ae E-2124G","ie_type":"engines","release":"OV-2021.1.096","tp_int8":"53.77","tp_fp16":"0","tp_fp32":"35.73","value":"0.252","efficiency":"0.757","latency":"21.02"},{"name":"Intel\u00ae Xeon\u00ae Silver 4216R","ie_type":"engines","release":"OV-2021.1.096","tp_int8":"577.74","tp_fp16":"0","tp_fp32":"150.17","value":"0.576","efficiency":"2.31","latency":"6.15"},{"name":"Intel\u00ae Xeon\u00ae Gold 5218T","ie_type":"engines","release":"OV-2021.1.096","tp_int8":"614.89","tp_fp16":"0","tp_fp32":"158.6","value":"0.455","efficiency":"2.928","latency":"5.89"},{"name":"Intel\u00ae Xeon\u00ae Platinum 8270","ie_type":"engines","release":"OV-2021.1.096","tp_int8":"1621.45","tp_fp16":"0","tp_fp32":"352.08","value":"0.218","efficiency":"3.954","latency":"5.61"},{"name":"Intel\u00ae Neural Compute Stick 2","ie_type":"accelerators","release":"OV-2021.1.096","tp_int8":"0","tp_fp16":"18.46","tp_fp32":"0","value":"0.267","efficiency":"7.385","latency":"0"},{"name":"Intel\u00ae Movidius\u2122 VPUs (Uzel* UI-AR8)","ie_type":"accelerators","release":"OV-2021.1.096","tp_int8":"0","tp_fp16":"148.64","tp_fp32":"0","value":"0.193","efficiency":"4.954","latency":"0"}]);var chart_name="se-resnext-50-CF";var chart_release="OV-2021.1.096";var chart_slug="se-resnext-50-cf-ov-2021-1-096";var chart_wrap=document.createElement('div');var chart_container=document.createElement('div');var chart_container2=document.createElement('div');chart_wrap.setAttribute("id","ov-graph-container_"+chart_slug);chart_container.setAttribute("class","chart-container");chart_container2.setAttribute("class","chart-container");var chart_title=document.createElement('h2');chart_title.setAttribute("class","chart-title");chart_title.innerHTML=chart_name;chart_container.appendChild(chart_title);var chart_titles=document.createElement('div');chart_titles.setAttribute("class","chart-grid-titles");chart_titles.innerHTML=`
    <div style="width:190px; border:none; margin:0;">&nbsp;</div>
    <div style="width:225px;"><span class="graph-legend">Throughput</span> <small>(higher is better)</small></div>
    <div style="width:185px;"><span class="graph-legend">Latency</span> <small>(lower is better)</small></div>
`;var second_row_chart_titles=document.createElement('div');second_row_chart_titles.setAttribute("class","chart-grid-titles");second_row_chart_titles.innerHTML=`
    <div style="width:190px; border:none; margin:0;">&nbsp;</div>
    <div style="width:225px;"><span class="graph-legend" style="border-bottom:none;">Value</span> <small>(higher is better)</small></div>
    <div style="width:185px;"><span class="graph-legend" style="border-bottom:none;">Efficiency</span> <small>(higher is better)</small></div>
`;chart_container.appendChild(chart_titles);chart_container2.appendChild(second_row_chart_titles)
var chartkey1=document.createElement('div');chartkey1.setAttribute("class","chart-key");chartkey1.innerHTML="CPU Inference Engines";chart_container.appendChild(chartkey1);var engine_charts=document.createElement('div');engine_charts.setAttribute("class","chart-wrap");engine_charts.setAttribute("id",chart_slug+"_engines");var engine_charts2=document.createElement('div');engine_charts2.setAttribute("class","chart-wrap");engine_charts2.setAttribute("id",chart_slug+"_engines2");var chart_1_wrap=document.createElement('div');chart_1_wrap.setAttribute("class","chart");var chart1=document.createElement('canvas')
chart1.setAttribute("id",chart_slug+"_chart-01");chart1.setAttribute("width","433");chart1.setAttribute("height","306");chart_1_wrap.appendChild(chart1)
engine_charts.appendChild(chart_1_wrap);const c1=chart1.getContext("2d")
var chart_2_wrap=document.createElement('div');chart_2_wrap.setAttribute("class","chart");var chart2=document.createElement('canvas')
chart2.setAttribute("id",chart_slug+"_chart-02");chart2.setAttribute("width","209");chart2.setAttribute("height","306");chart_2_wrap.appendChild(chart2)
engine_charts.appendChild(chart_2_wrap);const c2=chart2.getContext("2d")
var chart_3_wrap=document.createElement('div');chart_3_wrap.setAttribute("class","chart");var chart3=document.createElement('canvas')
chart3.setAttribute("id",chart_slug+"_chart-03");chart3.setAttribute("width","433");chart3.setAttribute("height","306");chart_3_wrap.appendChild(chart3)
engine_charts2.appendChild(chart_3_wrap);const c3=chart3.getContext("2d")
var chart_7_wrap=document.createElement('div');chart_7_wrap.setAttribute("class","chart");var chart7=document.createElement('canvas')
chart7.setAttribute("id",chart_slug+"_chart-07");chart7.setAttribute("width","209");chart7.setAttribute("height","306");chart_7_wrap.appendChild(chart7)
engine_charts2.appendChild(chart_7_wrap);const c7=chart7.getContext("2d")
chart_container.appendChild(engine_charts);chart_container2.appendChild(engine_charts2);var chartkey2=document.createElement('div');chartkey2.setAttribute("class","chart-key");chartkey2.innerHTML="Inference Accelerators";chart_container.appendChild(chartkey2);var accel_charts=document.createElement('div');accel_charts.setAttribute("class","chart-wrap");accel_charts.setAttribute("id",chart_slug+"_accelerators");var accel_charts2=document.createElement('div');accel_charts2.setAttribute("class","chart-wrap");accel_charts2.setAttribute("id",chart_slug+"_accelerators2");var chart_4_wrap=document.createElement('div');chart_4_wrap.setAttribute("class","chart");var chart4=document.createElement('canvas')
chart4.setAttribute("id",chart_slug+"_chart-04");chart4.setAttribute("width","433");chart4.setAttribute("height","150");chart_4_wrap.appendChild(chart4)
accel_charts.appendChild(chart_4_wrap);const c4=chart4.getContext("2d")
var chart_5_wrap=document.createElement('div');chart_5_wrap.setAttribute("class","chart");var chart5=document.createElement('canvas')
chart5.setAttribute("id",chart_slug+"_chart-05");chart5.setAttribute("width","209");chart5.setAttribute("height","150");chart_5_wrap.appendChild(chart5)
accel_charts.appendChild(chart_5_wrap);const c5=chart5.getContext("2d")
var chart_6_wrap=document.createElement('div');chart_6_wrap.setAttribute("class","chart");var chart6=document.createElement('canvas')
chart6.setAttribute("id",chart_slug+"_chart-06");chart6.setAttribute("width","433");chart6.setAttribute("height","150");chart_6_wrap.appendChild(chart6)
accel_charts2.appendChild(chart_6_wrap);const c6=chart6.getContext("2d")
var chart_8_wrap=document.createElement('div');chart_8_wrap.setAttribute("class","chart");var chart8=document.createElement('canvas')
chart8.setAttribute("id",chart_slug+"_chart-08");chart8.setAttribute("width","209");chart8.setAttribute("height","150");chart_8_wrap.appendChild(chart8)
accel_charts2.appendChild(chart_8_wrap);const c8=chart8.getContext("2d")
chart_container.appendChild(accel_charts);chart_container2.appendChild(accel_charts2);chart_footer_template=`
    <div class="chart-bottom-labels">
        <div style="width:190px; border:none; margin:0;">&nbsp;</div>
        <div style="width:240px;">Frames per Second (FPS)</div>
        <div style="width:200px;">Milliseconds</div>
    </div>
`;chart_footer_template2=`
    <div class="chart-bottom-labels">
        <div style="width:190px; border:none; margin:0;">&nbsp;</div>
        <div style="width:240px;">FPS/$</div>
        <div style="width:200px;">FPS/Thermal Design Power</div>
    </div>

    <div class="chart-legend">
        <div class="legend-wrap">
        <div class="legend"><div class="color" style="background:#00C7FD;"></div>INT8</div>
        <div class="legend"><div class="color" style="background:#0068B5;"></div>FP32</div>
        <div class="legend"><div class="color" style="background:#8BAE46;"></div>FP16</div>
        <div class="legend"><div class="color" style="background:#8F5DA2;"></div>Milliseconds</div>
        </div>
    </div>
`;var chart_footer=document.createElement('div');chart_footer.innerHTML=chart_footer_template;chart_container.appendChild(chart_footer);var chart_footer2=document.createElement('div');chart_footer2.innerHTML=chart_footer_template2;chart_container2.appendChild(chart_footer2);chart_wrap.appendChild(chart_container);chart_wrap.appendChild(chart_container2);document.addEventListener("DOMContentLoaded",function(){Chart.defaults.global.defaultFont="Roboto"
Chart.defaults.global.animation.duration=3000
var chart_script=document.getElementById(chart_slug)
chart_script.parentNode.insertBefore(chart_wrap,chart_script);var cpu_labels=["Intel\u00ae Atom\u2122 x5-E3940","Intel\u00ae Core\u2122 i3-8100","Intel\u00ae Core\u2122 i5-8500","Intel\u00ae Core\u2122 i7-8700T","Intel\u00ae Core\u2122 i9-10920X","Intel\u00ae Core\u2122 i5-1145G7E CPU-only","Intel\u00ae Core\u2122 i5-1145G7E GPU-only","Intel\u00ae Core\u2122 i5-1145G7E GPU+CPU","Intel\u00ae Xeon\u00ae E-2124G","Intel\u00ae Xeon\u00ae Silver 4216R","Intel\u00ae Xeon\u00ae Gold 5218T","Intel\u00ae Xeon\u00ae Platinum 8270"]
var inference_labels=["Intel\u00ae Neural Compute Stick 2","Intel\u00ae Movidius\u2122 VPUs (Uzel* UI-AR8)"]
var int8_data_throughput=["6.67","46.65","67.39","92.4","470.14","139.27","137.96","240.6","53.77","577.74","614.89","1621.45"];var fp32_data_throughput=["3.11","30.39","44.14","50.35","102.57","37.83","48.76","63.29","35.73","150.17","158.6","352.08"];var engine_data_latency=["161.81","24.13","16.75","14.29","4.3","7.98","10.03","10.03","21.02","6.15","5.89","5.61"];var int8_data_value=["0.158","0.398","0.35","0.304","0.671","0.45","0.446","0.778","0.252","0.576","0.455","0.218"];var int8_data_efficiency=["0.701","0.717","1.036","2.64","2.849","4.973","4.927","8.592","0.757","2.31","2.928","3.954"];var accel_data_tp_fp16=["18.46","148.64"];var accel_data_latency=["0","0"];var accel_data_value=["0.267","0.193"];var accel_data_efficiency=["7.385","4.954"];var engine_throughput_max=1945.74;var engine_value_max=0.936;var engine_eff_max=10.308;var engine_latency_max=194.172;var accel_throughput_max=178.368;var accel_value_max=0.324;var accel_eff_max=8.868;var accel_latency_max=1.2;var ChartData1={labels:cpu_labels,datasets:[{data:fp32_data_throughput,backgroundColor:'#0068B5',label:"FPS (FP32)",barThickness:12},{data:int8_data_throughput,backgroundColor:'#00C7FD',label:"FPS (INT8)",barThickness:12},]};ChartOptions1={responsive:false,scales:{xAxes:[{ticks:{display:true,min:0,max:engine_throughput_max,fontSize:6,beginAtZero:true},gridLines:{color:'#bebebe',borderDash:[],zeroLineColor:'#4d4d4d',},}],yAxes:[{gridLines:{display:true,beginAtZero:true,drawOnChartArea:false,},ticks:{mirror:true,padding:180,fontSize:9},}],},layout:{padding:{left:180,right:7}},label:{font:{family:"Roboto",size:9}},plugins:{datalabels:{color:"#4A4A4A",anchor:"end",align:"end",clamp:false,offset:0,display:true,font:{size:8,family:'Roboto'}}},legend:{display:false},title:{display:false,},elements:{},tooltips:{},hover:{mode:'nearest',animationDuration:400,},};var ChartData2={labels:cpu_labels,datasets:[{data:engine_data_latency,backgroundColor:'#8F5DA2',borderColor:'rgba(170,170,170,0)',label:"Milliseconds",barThickness:12},]};ChartOptions2={responsive:true,scales:{xAxes:[{ticks:{display:true,min:0,max:engine_latency_max,fontSize:6,beginAtZero:true},gridLines:{color:'#bebebe',borderDash:[],zeroLineColor:'#4d4d4d',},}],yAxes:[{gridLines:{display:false},ticks:{display:false}}],},layout:{padding:{top:7,right:7}},label:{font:{family:"Roboto"}},plugins:{datalabels:{color:"#4A4A4A",anchor:"end",align:"end",clamp:false,offset:0,display:true,font:{size:8,family:'Roboto'}}},legend:{display:false},title:{display:false,},elements:{},tooltips:{},hover:{mode:'nearest',animationDuration:400,},};var ChartData3={labels:cpu_labels,datasets:[{data:int8_data_value,backgroundColor:'#00C7FD',borderColor:'rgba(170,170,170,0)',label:"FPS/$ (INT8)",barThickness:12},]};ChartOptions3={responsive:false,scales:{xAxes:[{ticks:{display:true,min:0,max:engine_value_max,fontSize:6,beginAtZero:true},gridLines:{color:'#bebebe',borderDash:[],zeroLineColor:'#4d4d4d',},}],yAxes:[{gridLines:{display:true,beginAtZero:true,drawOnChartArea:false,},ticks:{mirror:true,padding:180,fontSize:9},}],},layout:{padding:{left:180,right:7}},label:{font:{family:"Roboto",size:9}},plugins:{datalabels:{color:"#4A4A4A",anchor:"end",align:"end",clamp:false,offset:0,display:true,font:{size:8,family:'Roboto'}}},legend:{display:false},title:{display:false,},elements:{},tooltips:{},hover:{mode:'nearest',animationDuration:400,},};var ChartData7={labels:cpu_labels,datasets:[{data:int8_data_efficiency,backgroundColor:'#00C7FD',borderColor:'rgba(170,170,170,0)',label:"FPS/TDP (INT8)",barThickness:12},]};ChartOptions7={responsive:false,scales:{xAxes:[{ticks:{display:true,min:0,max:engine_eff_max,fontSize:6,beginAtZero:false},gridLines:{color:'#bebebe',borderDash:[],zeroLineColor:'#4d4d4d',},}],yAxes:[{gridLines:{display:false},ticks:{display:false}}],},layout:{padding:{top:7,right:7}},label:{font:{family:"Roboto"}},plugins:{datalabels:{color:"#4A4A4A",anchor:"end",align:"end",clamp:false,offset:0,display:true,font:{size:8,family:'Roboto'}}},legend:{display:false},title:{display:false,},elements:{},tooltips:{},hover:{mode:'nearest',animationDuration:400,},};var ChartData4={labels:inference_labels,datasets:[{data:accel_data_tp_fp16,backgroundColor:'#8BAE46',borderColor:'rgba(136,136,136,0)',label:"FPS (FP16)",barThickness:12}]};ChartOptions4={maintainAspectRatio:true,responsive:true,scales:{xAxes:[{ticks:{display:true,min:0,max:accel_throughput_max,fontSize:6,beginAtZero:true},gridLines:{color:'#bebebe',borderDash:[],zeroLineColor:'#4d4d4d',},}],yAxes:[{gridLines:{display:true,beginAtZero:true,drawOnChartArea:false,},ticks:{mirror:true,padding:180,fontSize:9},}],},layout:{padding:{left:180,}},label:{font:{family:"Roboto"}},plugins:{datalabels:{color:"#4A4A4A",anchor:"end",align:"end",clamp:false,offset:0,display:true,font:{size:8,family:'Roboto'}}},legend:{display:false},title:{display:false,},elements:{},tooltips:{},hover:{mode:'nearest',animationDuration:400,},};var ChartData5={labels:inference_labels,datasets:[{data:accel_data_latency,backgroundColor:'#8F5DA2',borderColor:'rgba(170,170,170,0)',label:"Milliseconds",barThickness:12},]};ChartOptions5={responsive:false,scales:{xAxes:[{ticks:{display:true,min:0,max:accel_latency_max,fontSize:6,beginAtZero:true},gridLines:{color:'#bebebe',borderDash:[],zeroLineColor:'#4d4d4d',},}],yAxes:[{gridLines:{display:false},ticks:{display:false}}],},layout:{padding:{top:5,},},label:{font:{family:"Roboto"}},plugins:{datalabels:{color:"#4A4A4A",anchor:"end",align:"end",clamp:false,offset:0,display:true,font:{size:8,family:'Roboto'}}},legend:{display:false},title:{display:false,},elements:{},tooltips:{},hover:{mode:'nearest',animationDuration:400,},};var ChartData6={labels:inference_labels,datasets:[{data:accel_data_value,backgroundColor:'#00C7FD',borderColor:'rgba(170,170,170,0)',label:"FPS/$ (INT8)",barThickness:12},]};ChartOptions6={responsive:false,scales:{xAxes:[{ticks:{display:true,min:0,max:accel_value_max,fontSize:6,beginAtZero:true},gridLines:{color:'#bebebe',borderDash:[],zeroLineColor:'#4d4d4d',},}],yAxes:[{gridLines:{display:true,beginAtZero:true,drawOnChartArea:false,},ticks:{mirror:true,padding:180,fontSize:9},}],},layout:{padding:{left:180,right:7}},label:{font:{family:"Roboto",size:9}},plugins:{datalabels:{color:"#4A4A4A",anchor:"end",align:"end",clamp:false,offset:0,display:true,font:{size:8,family:'Roboto'}}},legend:{display:false},title:{display:false,},elements:{},tooltips:{},hover:{mode:'nearest',animationDuration:400,},};var ChartData8={labels:inference_labels,datasets:[{data:accel_data_efficiency,backgroundColor:'#00C7FD',borderColor:'rgba(170,170,170,0)',label:"FPS/TDP (INT8)",barThickness:12},]};ChartOptions8={responsive:false,scales:{xAxes:[{ticks:{display:true,min:0,max:accel_eff_max,fontSize:6,beginAtZero:true},gridLines:{color:'#bebebe',borderDash:[],zeroLineColor:'#4d4d4d',},}],yAxes:[{gridLines:{display:false},ticks:{display:false}}],},layout:{padding:{top:5,},},label:{font:{family:"Roboto"}},plugins:{datalabels:{color:"#4A4A4A",anchor:"end",align:"end",clamp:false,offset:0,display:true,font:{size:8,family:'Roboto'}}},legend:{display:false},title:{display:false,},elements:{},tooltips:{},hover:{mode:'nearest',animationDuration:400,},};renderedChart1=new Chart(c1,{type:"horizontalBar",data:ChartData1,options:ChartOptions1});renderedChart2=new Chart(c2,{type:"horizontalBar",data:ChartData2,options:ChartOptions2});renderedChart4=new Chart(c4,{type:"horizontalBar",data:ChartData4,options:ChartOptions4});renderedChart5=new Chart(c5,{type:"horizontalBar",data:ChartData5,options:ChartOptions5});renderedChart3=new Chart(c3,{type:"horizontalBar",data:ChartData3,options:ChartOptions3});renderedChart6=new Chart(c6,{type:"horizontalBar",data:ChartData6,options:ChartOptions6});renderedChart7=new Chart(c7,{type:"horizontalBar",data:ChartData7,options:ChartOptions7});renderedChart8=new Chart(c8,{type:"horizontalBar",data:ChartData8,options:ChartOptions8});});})();