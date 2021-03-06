class Fly extends Enemy{
	constructor(x,y,imgw,imgh,h,w,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY){
		super(x,y,imgw,imgh,h,w,'fly','fly',hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY);
		this.startingY = y;
		this.directionX = Math.random() - .5  < 0 ? -1 : 1;
		// Used for sin calculation ========
		this.amplitude = 6;
		this.period = 0.5;
		this.timeSinceStart = 0;
		// =================================
	}
	collideWTerrain(){
	    var posI = this.getIPosition();
	    var posJ = this.getJPosition();

	    // check if collide with close objects
	    for (var i = posI - 1; i <= posI + 1; i++)
	    {
	        for(var j = posJ - 1; j <= posJ + 1; j++)
	        {
	            if (i < 0 || i >= world.map['height'] || j < 0 || j >= world.map['width']) continue; // world ' out of bounds ' ?
				var fly = this;
				world.level[i][j].forEach(function(actor){
					if ((actor.type == 'platform' || actor.type == 'mysticalBox') && fly.overlap(actor))
					{
						if(fly.posGridI < actor.posGridI && fly.posGridJ == actor.posGridJ)
						{
							fly.y = actor.y - fly.height - 1;
							fly.speedY = 0;
							fly.directionY = 0;
						}
						else if(fly.posGridI == actor.posGridI && fly.directionY == 0)
						{
							if (fly.posGridJ < actor.posGridJ)
							{
								fly.x = actor.x - fly.width - 1;
							}
							else
							{
								fly.x = actor.x + actor.width + 1;
							}
							fly.directionX *= -1;
						}
					}
				});
	        }
	    }

	}
	move(dt){
		
		super.move(dt);
		this.timeSinceStart += dt;
		if(!this.dead){
			var offset = Math.cos(this.timeSinceStart * Math.PI*2 / this.period) * this.amplitude;
			this.y = this.startingY - offset;
		}
	}

}
Images['fly'] = new Array();
