{

	let canvas = document.getElementById("canvas");
		if (canvas && canvas.getContext) {
		let ctx = canvas.getContext("2d");
			if (ctx) {
					ctx.fillStyle ="#000";
					ctx.lineWidth = 6;
					let X = 0;
					let Y = 0;
					let R = 100;
					let r = (2*Math.PI) / 2.5;
															
					// Traslada el contexto al centro del canvas  
					ctx.translate(canvas.width / 2, canvas.height / 2);
					//gira el contexto unos 270º
					ctx.rotate(3*Math.PI/2);
					// Dibujamos la estrella
					ctx.beginPath();
							for( let i = 0; i < 5; i++ ){
							x = X + R * Math.cos( r*i );
							y = Y + R * Math.sin( r*i );
							ctx.lineTo(x, y);
							}
					ctx.closePath();
					ctx.stroke();
					ctx.fill();
			}
		}
}