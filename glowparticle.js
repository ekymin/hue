const PI2 = Math.PI * 2; // 3.14 PI * 2

export class GlowParticle {
    constructor(x, y, radius, rgb){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.rgb = rgb;

        this.vx = Math.random() * 4; //Math.random (0 ~< 1 random)
        this.vy = Math.random() * 4;

        this.sinValue = Math.random();
    }

    animate(ctx, stageWidth, stageHeight){
        
        this.sinValue += 0.01;

        this.radius += Math.sin(this.sinValue);
        
        this.x += this.vx;
        this.y += this.vy;

        if(this.x < 0){
            this.vx *= -1;
            this.x += 10;
        }else if(this.x > stageWidth){
            this.vx *= -1;
            this.x -= 10;
        }

        if(this.y < 0){
            this.vy *= -1;
            this.y += 10;
        }else if(this.y > stageHeight){
            this.vy *= -1;
            this.y -= 10;
        }

        ctx.beginPath(); //begin to draw the path (color)
        const g = ctx.createRadialGradient(
            this.x,
            this.y,
            this.radius * 0.01,
            this.x,
            this.y,
            this.radius
        );
        //createRadialGradient(x0, y0, r0, x1, y1, r1)
        g.addColorStop(0,`rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`);
        g.addColorStop(1,`rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`);
        ctx.fillStyle = g;
        //ctx.fillStyle = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`;
        ctx.arc(this.x, this.y, this.radius, 0, PI2, false); // arc(x, y, radius, startAngle, endAngle, counterclockwise)
        ctx.fill();
    }
}