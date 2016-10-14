	// idを返す
			
			function getId(elm)
			{
				var id = elm.id;
				return id;
			}

// + [ 読み込み時に数字を描画 ] ------------------------
window.onload = function()
{
	for(var i=1; i<=60; i+=1)
	{
		var clone = document.createElement('input');
		// プロパティの追加
		clone.type = 'button';
		clone.id    = 'num_btn'+ i;
		
		clone.className = 'num_btns';
		clone.innerHTML = i;
		
		if (i % 5 === 0){ clone.style.color = 'red';}
		if (i % 10 === 1){ clone.style.clear = 'left';}
		
		clone.onclick = minVal;
		// ノード生成
		document.getElementById('num_btns_area').appendChild(clone);
		// value を追加
		document.getElementById('num_btn' + i).value = i;
	}

function minVal()
		{
			var val = document.getElementById(getId(this)).value;
			document.getElementById('num_screen').innerHTML = val;
			return console.log(val);
		}
// + [ 数字を表示させる ]

// 
var obj = {
	getNum: function()
	{
		document.getElementById('text').value = "test";
	}
}

document.getElementById('getNumBtn').onclick = obj.getNum;

// 分を確認する
var min = new Date().getMinutes();



var confirmMin = function(minVal)
{

	if(min === 21) {
		alert('時間です');
	}
}

setInterval(confirmMin,1000);
}