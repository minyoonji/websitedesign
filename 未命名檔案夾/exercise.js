(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.starbutton = function() {
	this.initialize(img.starbutton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1132,352);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.starbutton();
	this.instance.parent = this;
	this.instance.setTransform(-498,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-498,-170,1132,352);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.exercise = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Next Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the next frame and stops the movie.
		*/
		stop();
		button_1.addEventListener(MouseEvent.CLICK, fl_ClickToGoToNextFrame_2);
		
		function fl_ClickToGoToNextFrame_2(event:MouseEvent):void
		{
			nextFrame(2);
		}
		gotoandplay(21);
		stop(20);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(33));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(275,200,0.962,0.962);
	this.___camera___instance.depth = 0;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({_off:true},1).wait(32));

	// button
	this.button_1 = new lib.Symbol1();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(272.1,316.8,0.148,0.158);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).to({_off:true},1).wait(32));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AAeAbIg7AAQgPAAgOABIAAg3QANACAQAAIA7AAQAQAAANgCIAAA3QgOgBgPAAg");
	this.shape.setTransform(329.9,230.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AgPBrQgQgMAAgbIAAhbIgLAAQgNAAgNACIAAgyQANACAOAAIAKAAIAAgHQAAgWgCgTIA8AAQgCAUAAAVIAAAHIALAAQARAAAMgCIAAAyQgNgCgPAAIgMAAIAABMQAAALAFAEQAFADAJAAQALAAAKgFIAEAuQgTAGgWAAQgdAAgOgLg");
	this.shape_1.setTransform(315.5,228.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AgeB9QACgUAAgZIAAhcQAAgbgCgSIA9AAQgCAQAAAdIAABcQAAAYACAVgAgdhPIAAgtIA7AAIAAAtg");
	this.shape_2.setTransform(303.7,227.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AhKBNQgRgRAAgiIAAhKQAAgZgDgUIA/AAQgCATgBAaIAAA9QAAAQAGAGQAGAIANAAQAZAAATgeIAAg9QAAgYgCgVIA9AAQgCATAAAaIAABcQAAAdACAQIg7AAIAAgNIAAgIQgPAOgOAGQgNAGgTAAQgfAAgRgRg");
	this.shape_3.setTransform(288,230.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("AhKBdQADgUAAgZIAAhcQAAgcgDgRIA8AAIAAAYQAUgbAnAAQANAAAQADIgOA2QgTgFgLgBQgXABgMAQQgHAJgCAQIAAAvQAAAaACATg");
	this.shape_4.setTransform(269.3,230.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("AhaB+QADgRAAgiIAAibQAAgZgCgTIArACIBWAAQAiAAARgDIAAA5QgTgCggAAIhEAAIAAAxIA4AAQAdAAATgCIAAA3QgTgCgdAAIg4AAIAAAsQAAAlADAPg");
	this.shape_5.setTransform(250.6,227.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066CC").s().p("AAeAbIg7AAQgPAAgOABIAAg3QANACAQAAIA7AAQAQAAANgCIAAA3QgOgBgPAAg");
	this.shape_6.setTransform(232.6,230.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgZFQQAHgxAAhIIAAmXIggAAQgxAAgxAGIAAiVQAiAHA+AAIBlAAQBDgBAggDQgGA7AABGIAAGiQAABEAHA1g");
	this.shape_7.setTransform(396.2,169.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgqEeQgqggAAhJIAAj0IgeAAQgjABgjAEIAAiFQAjAEAlAAIAcAAIAAgRQAAg7gGgyICiAAQgGA1AAA4IAAARIAdAAQAvAAAfgDIAACEQgkgEgmgBIghAAIAADMQAAAfAOAKQAOAIAXAAQAcABAcgOIAMB5QgzAQg7AAQhQAAglgcg");
	this.shape_8.setTransform(324,173.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AjMC0QgVgfgLgxICfgSQALA8BNAAQBLAAAAgmQAAgTgSgKQgOgJgzgKQhNgPgogOQg6gVgXgiQgTghAAgsQAAhHA4gpQA6gqBkAAQBxAAA4AzQAiAfASA9IiaARQgGgwg9ABQhCAAgBAiQABAQARAJQATAJA6ANQBhAVAiARQBNAlAABVQAABDgpAoQg6A6iDgBQiXABg7hQg");
	this.shape_9.setTransform(278.8,178.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("Ai0DDQhJhKAAh5QAAh2BGhIQBGhIByAAQBdAAA/AxQA/AwAVBaQAIAhAEBHIABAQIlnAAQAMBjBfAAQAxAAAggdQAQgQAIgZICLAnQgXA1gdAdQhGBEh3AAQh1AAhEhEgABmhBQgRhOhUAAQhUAAgUBOIDNAAIAAAAg");
	this.shape_10.setTransform(225.2,178.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhYFQQAHgzAAhGIAAmSIheAAQg3AAhCAFIAAiZQAuAHBJAAIFdAAQBJAAA0gHIAACZQgygFhLAAIhaAAIAAGSQAABGAGAzg");
	this.shape_11.setTransform(166.8,169.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnAoIAAhQIBPAAIAABQg");
	this.shape_12.setTransform(126.4,305.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVCPQgUgQAAglIAAh5IgQAAQgRAAgSADIAAhDQASACASAAIAPAAIAAgIQAAgegEgZIBSAAQgEAaAAAdIAAAIIAPAAQAXAAAPgCIAABDQgSgDgSAAIgRAAIAABmQAAAPAHAFQAHAEALAAQAPAAANgHIAHA9QgaAIgdAAQgoAAgTgOg");
	this.shape_13.setTransform(110.7,294.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhiB8QADgaAAgiIAAh6QAAgmgDgXIBPAAIAAAgQAbgkA0AAQARAAAXAEIgUBIQgZgHgQAAQgdAAgRAWQgKAMgCAWIAAA/QAAAhADAag");
	this.shape_14.setTransform(91,297);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhkBqQgWgUAAgiQAAgmAdgUQAegVA1gFQAQgBAngBIAAgKQABgcgmAAQgkAAgJAcIhMgMQALggAWgQQAhgXA4AAQAxAAAZAOQAmAUAAA0IAABrQAAAfACAaIhOAAIAAgTQgeAYguAAQgtAAgYgWgAgWAYQgYAIAAASQABAXAgAAQAbAAARgPQAOgNAAgSIAAgLQguABgVAHg");
	this.shape_15.setTransform(64.5,297.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiKCiQADgcAAgeIAAjDQAAgjgDgcIBPAAIAAAOIAAAIQAhgdAwAAQA1AAAfAfQAhAgAAA9QAAA9gkAjQgfAggygBQgeABgYgLQgMgFgPgNIAAAOIAAAcQAAAjADAXgAgohRQgSATAAAbQAAAcASATQASASAaAAQAXAAAPgPQATgQgBgjQAAgegPgSQgQgQgcgBQgYAAgRAUg");
	this.shape_16.setTransform(36,300.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUCPQgWgQABglIAAh5IgPAAQgSAAgSADIAAhDQASACASAAIAPAAIAAgIQgBgegDgZIBRAAQgDAaAAAdIAAAIIAPAAQAXAAAQgCIAABDQgSgDgTAAIgRAAIAABmQAAAPAHAFQAHAEAMAAQAOAAAOgHIAGA9QgaAIgeAAQgnAAgSgOg");
	this.shape_17.setTransform(461.1,252.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAtB6QgHgRgNgUIgZgmIgYAnQgJAOgKAWIheAAIAegmIBBhaIg5hQIgcgjIBbAAQAHATALAPIATAeIATgeQANgTAGgPIBZAAIgbAjIg5BQIBABaIAeAmg");
	this.shape_18.setTransform(437.4,255.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhZBhQglgkAAg9QAAg6AjglQAjgkA4AAQAvAAAgAZQAfAYAKAtQAFARABAiIABAIIizAAQAGAyAvAAQAYAAARgPQAIgHADgNIBGAUQgMAZgOAPQgiAjg9gBQg5ABgigjgAAzggQgIgngrAAQgpAAgKAnIBmAAIAAAAg");
	this.shape_19.setTransform(409.6,255.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AArB9QADgaAAgjIAAhRQAAgUgHgJQgIgLgSAAQghAAgZAqIAABPQAAAhADAcIhTAAQADgZAAgkIAAh6QAAgngDgVIBQAAIAAARIgBALQAkgiAuAAQAqAAAWAXQAXAWAAAsIAABkQAAAhADAbg");
	this.shape_20.setTransform(381.2,255);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhfBgQgkgkAAg8QAAg7AkgkQAjgjA8AAQA9AAAjAjQAkAjAAA8QAAA7gkAkQglAkg7AAQg8AAgjgjgAgogzQgPASAAAhQAAAhAPATQAPASAZAAQAaAAAOgSQAPgSAAgiQAAgggPgTQgOgTgaAAQgZAAgPATg");
	this.shape_21.setTransform(338.8,255.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUCPQgWgQABglIAAh5IgQAAQgRAAgSADIAAhDQASACASAAIAPAAIAAgIQAAgegEgZIBRAAQgDAaAAAdIAAAIIAPAAQAXAAAPgCIAABDQgSgDgSAAIgRAAIAABmQAAAPAHAFQAHAEAMAAQAOAAANgHIAHA9QgaAIgdAAQgoAAgSgOg");
	this.shape_22.setTransform(314.9,252.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhiB9QACgbABgiIAAh7QgBglgCgWIBPAAIAAAfQAagkA1AAQARgBAXAGIgUBIQgZgIgQAAQgdAAgRAVQgKANgCAWIAAA+QAAAjADAag");
	this.shape_23.setTransform(281.9,255);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhZBhQglgkAAg9QAAg6AjglQAjgkA5AAQAuAAAfAZQAgAYALAtQADARADAiIAAAIIizAAQAGAyAwAAQAXAAAQgPQAJgHADgNIBGAUQgLAZgPAPQgjAjg7gBQg6ABgigjgAAzggQgIgngqAAQgqAAgKAnIBmAAIAAAAg");
	this.shape_24.setTransform(256.1,255.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVCPQgUgQAAglIAAh5IgQAAQgRAAgSADIAAhDQASACASAAIAPAAIAAgIQAAgegEgZIBSAAQgEAaAAAdIAAAIIAPAAQAXAAAPgCIAABDQgSgDgTAAIgQAAIAABmQAAAPAHAFQAHAEALAAQAPAAANgHIAHA9QgaAIgdAAQgoAAgTgOg");
	this.shape_25.setTransform(232.7,252.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AArB9QADgaAAgjIAAhRQAAgUgHgJQgIgLgSAAQghAAgZAqIAABPQAAAhADAcIhTAAQADgZAAgkIAAh6QAAgngDgVIBQAAIAAARIgBALQAkgiAuAAQAqAAAWAXQAXAWAAAsIAABkQAAAhADAbg");
	this.shape_26.setTransform(208.5,255);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhZBhQglgkAAg9QAAg6AjglQAjgkA4AAQAvAAAgAZQAfAYAKAtQAFARABAiIABAIIizAAQAGAyAvAAQAYAAARgPQAIgHADgNIBGAUQgMAZgOAPQgiAjg9gBQg5ABgigjgAAzggQgIgngrAAQgpAAgKAnIBmAAIAAAAg");
	this.shape_27.setTransform(180.1,255.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhlBaQgLgPgFgZIBPgJQAGAeAlAAQAmAAAAgTQAAgKgJgFQgHgEgagFQgmgHgUgHQgdgLgLgRQgKgQAAgWQAAgkAdgUQAcgVAyAAQA4AAAdAaQARAPAJAfIhOAIQgDgYgeAAQghAAAAARQAAAIAJAFQAJAEAdAHQAxAKARAJQAmASAAAqQAAAigUAUQgdAdhCAAQhLAAgdgog");
	this.shape_28.setTransform(139.9,255.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhlBaQgLgPgFgZIBPgJQAGAeAlAAQAmAAAAgTQAAgKgJgFQgHgEgagFQgmgHgUgHQgdgLgLgRQgKgQAAgWQAAgkAdgUQAcgVAyAAQA4AAAdAaQARAPAJAfIhOAIQgDgYgeAAQghAAAAARQAAAIAJAFQAJAEAdAHQAxAKARAJQAmASAAAqQAAAigUAUQgdAdhCAAQhLAAgdgog");
	this.shape_29.setTransform(113.7,255.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhZBhQglgkAAg9QAAg6AjglQAjgkA5AAQAuAAAfAZQAgAYAKAtQAFARACAiIAAAIIizAAQAGAyAwAAQAYAAAPgPQAJgHAEgNIBFAUQgMAZgOAPQgjAjg7gBQg6ABgigjgAAzggQgJgngpAAQgqAAgKAnIBmAAIAAAAg");
	this.shape_30.setTransform(87,255.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhjB9QAEgbAAgiIAAh7QAAglgEgWIBQAAIAAAfQAbgkA0AAQARgBAXAGIgUBIQgZgIgPAAQgfAAgQAVQgKANgCAWIAAA+QAAAjADAag");
	this.shape_31.setTransform(63,255);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AiKCiQADgcAAgfIAAjBQAAgkgDgbIBPAAIAAANIAAAIQAhgdAwAAQA1AAAfAfQAhAgAAA9QAAA+gkAiQgfAfgyABQgeAAgYgLQgMgFgPgNIAAAOIAAAcQAAAjADAXgAgohRQgSATAAAbQAAAdASARQASATAaAAQAXAAAPgPQATgQgBgjQAAgegPgSQgQgRgcAAQgYABgRATg");
	this.shape_32.setTransform(36,258.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhqCHQgfgiAAg8QAAg+AigjQAgggAyABQAsAAAlAeIAAgQIAAghQgBgngDgYIBSAAQgDAXAAAoIAADOQAAAlADAaIhOAAIAAgNIAAgJQgUARgSAGQgRAGgZAAQg3AAgfgjgAgsgIQgPARAAAgQAAAjASASQAPAPAYAAQAaAAASgUQAQgTAAgeQAAgdgQgTQgSgSgaAAQgaAAgQASg");
	this.shape_33.setTransform(445,209.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AArB9QADgaAAgiIAAhRQAAgVgHgJQgIgLgSAAQghAAgZAqIAABQQAAAgADAcIhTAAQADgZAAgjIAAh7QAAgngDgVIBQAAIAAAQIgBAMQAkgiAuAAQAqAAAWAWQAXAXAAAtIAABjQAAAhADAbg");
	this.shape_34.setTransform(415.5,213);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhkBqQgWgUAAgiQAAgmAdgUQAegVA1gFQAPgBApgBIAAgKQgBgcglAAQgkAAgIAcIhNgMQALggAXgQQAggXA5AAQAvAAAaAOQAmAUgBA0IAABrQABAfACAaIhNAAIAAgTQgfAYguAAQguAAgXgWgAgXAYQgWAIAAASQgBAXAhAAQAaAAASgPQAPgNAAgSIAAgLQgvABgWAHg");
	this.shape_35.setTransform(386.4,213.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAtB6QgHgQgNgVIgZgmIgYAoQgJANgKAWIheAAIAegmIBBhaIg5hQIgcgjIBbAAQAHATALAPIATAeIATgeQANgTAGgPIBZAAIgbAjIg5BQIBABZIAeAng");
	this.shape_36.setTransform(345.4,213.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhfBgQgkgkAAg8QAAg7AkgkQAjgjA8AAQA9AAAjAjQAkAjAAA8QAAA7gkAkQglAkg7AAQg8AAgjgjgAgogzQgPASAAAhQAAAhAPATQAPASAZAAQAaAAAOgSQAPgSAAgiQAAgggPgTQgOgTgaAAQgZAAgPATg");
	this.shape_37.setTransform(316.9,213.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgWCkQgSgGgTgRIAAAJIAAANIhOAAQADgaAAglIAAjOQAAglgDgaIBRAAQgDAbAAAkIAAAhIAAAQQAigeAvAAQA3gBAeAiQAfAhAAA6QAABBgkAlQgfAfg0AAQgYAAgRgGgAgogIQgSATAAAdQAAAdASAUQARAUAZAAQAaAAAQgUQAQgTAAggQAAgegPgRQgPgSgaAAQgbAAgRATg");
	this.shape_38.setTransform(287.8,209.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgVCPQgUgQAAglIAAh5IgQAAQgRAAgSADIAAhDQASACASAAIAPAAIAAgIQAAgegDgZIBRAAQgEAaAAAdIAAAIIAPAAQAXAAAPgCIAABDQgRgDgUAAIgQAAIAABmQAAAPAHAFQAHAEALAAQAPAAANgHIAHA9QgaAIgdAAQgoAAgTgOg");
	this.shape_39.setTransform(249,210.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAtB6QgHgQgNgVIgZgmIgYAoQgJANgKAWIheAAIAegmIBBhaIg5hQIgcgjIBbAAQAHATALAPIATAeIATgeQANgTAGgPIBZAAIgbAjIg5BQIBABZIAeAng");
	this.shape_40.setTransform(225.3,213.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhZBiQglglAAg9QAAg6AjglQAjgjA4gBQAwAAAeAYQAgAZALAtQADAQACAkIABAHIizAAQAGAyAwAAQAXAAAQgPQAJgIADgNIBGAUQgLAbgPAPQgjAhg7ABQg6gBgighgAAzggQgIgngrAAQgpAAgKAnIBmAAIAAAAg");
	this.shape_41.setTransform(197.5,213.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVCPQgVgQABglIAAh5IgPAAQgSAAgSADIAAhDQASACASAAIAPAAIAAgIQAAgegEgZIBRAAQgDAaAAAdIAAAIIAPAAQAXAAAPgCIAABDQgSgDgSAAIgRAAIAABmQAAAPAHAFQAHAEAMAAQAOAAANgHIAHA9QgaAIgdAAQgoAAgTgOg");
	this.shape_42.setTransform(174.1,210.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhZBiQglglAAg9QAAg6AjglQAjgjA4gBQAwAAAeAYQAgAZALAtQADAQACAkIABAHIizAAQAGAyAvAAQAZAAAQgPQAIgIADgNIBGAUQgLAbgPAPQgjAhg7ABQg6gBgighgAAzggQgJgngqAAQgpAAgKAnIBmAAIAAAAg");
	this.shape_43.setTransform(137.5,213.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AArCmQADgaAAgiIAAhSQAAgVgHgIQgIgKgRAAQgiAAgZAoIAABRQAAAgADAcIhTAAQADgZAAgjIAAjTQAAgngDgWIBTAAQgDAYAAAlIAAAqIgBAOQAjgiAvAAQAqABAWAWQAXAWAAAsIAABkQAAAiADAag");
	this.shape_44.setTransform(109.1,208.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgUCPQgWgQAAglIAAh5IgOAAQgSAAgRADIAAhDQARACATAAIANAAIAAgIQAAgegDgZIBRAAQgDAaAAAdIAAAIIAOAAQAYAAAQgCIAABDQgTgDgSAAIgRAAIAABmQAAAPAHAFQAHAEAMAAQAOAAAOgHIAFA9QgZAIgeAAQgnAAgSgOg");
	this.shape_45.setTransform(84.8,210.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AArB9QADgaAAgiIAAhRQAAgVgHgJQgIgLgSAAQghAAgZAqIAABQQAAAgADAcIhTAAQADgZAAgjIAAh7QAAgngDgVIBQAAIAAAQIgBAMQAkgiAuAAQAqAAAWAWQAXAXAAAtIAABjQAAAhADAbg");
	this.shape_46.setTransform(47.3,213);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgpCmQADgaAAgiIAAh6QAAgkgDgYIBTAAQgEAVAAAnIAAB6QAAAhAEAbgAgohpIAAg9IBQAAIAAA9g");
	this.shape_47.setTransform(26.3,208.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgVCPQgUgQAAglIAAh5IgQAAQgRAAgSADIAAhDQASACASAAIAPAAIAAgIQAAgegDgZIBRAAQgEAaAAAdIAAAIIAPAAQAXAAAPgCIAABDQgSgDgTAAIgQAAIAABmQAAAPAHAFQAHAEALAAQAPAAANgHIAHA9QgaAIgdAAQgoAAgTgOg");
	this.shape_48.setTransform(537.9,168.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgpCmQADgZAAgjIAAh6QAAglgDgYIBTAAQgEAWAAAnIAAB6QAAAhAEAbgAgohqIAAg8IBQAAIAAA8g");
	this.shape_49.setTransform(522.1,166.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhjBnQgXgYAAgsIAAhjQAAghgDgbIBTAAQgDAZAAAjIAABRQAAAWAGAIQAJALARAAQAiAAAZgpIAAhRQAAghgDgbIBTAAQgDAZAAAjIAAB6QAAAnADAWIhQAAIAAgSIABgKQgUASgTAIQgSAIgZAAQgpAAgXgWg");
	this.shape_50.setTransform(501.1,171.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhiB8QADgaAAgiIAAh6QAAgmgDgXIBPAAIAAAgQAbgkA0AAQARAAAXAEIgUBIQgZgHgQAAQgeAAgQAWQgKAMgCAWIAAA/QAAAhADAag");
	this.shape_51.setTransform(476.2,171);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ag0CqQADgaAAgjIAAh4IgLAAQgaAAgTADIAAhEQAUADAZAAIALAAIAAgTQAAgnAXgUQAXgSAwAAQAeAAAfAJIgMA6QgTgKgVAAQgPAAgGAGQgHAIABAPIAAAKIAMAAQAbAAAagDIAABEQgYgDgdAAIgMAAIAAB4QAAAjADAag");
	this.shape_52.setTransform(453.3,166.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("Ag1CqQAEgaAAgjIAAh4IgLAAQgaAAgTADIAAhEQAUADAZAAIALAAIAAgTQAAgnAXgUQAXgSAwAAQAeAAAfAJIgMA6QgTgKgVAAQgPAAgGAGQgGAIgBAPIAAAKIAMAAQAbAAAagDIAABEQgXgDgdAAIgNAAIAAB4QABAjADAag");
	this.shape_53.setTransform(418.2,166.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhfBgQgkgkAAg8QAAg7AkgkQAjgjA8AAQA9AAAjAjQAkAjAAA8QAAA7gkAkQglAkg7AAQg8AAgjgjgAgogzQgPASAAAhQAAAhAPATQAPASAZAAQAaAAAOgSQAPgSAAgiQAAgggPgTQgOgTgaAAQgZAAgPATg");
	this.shape_54.setTransform(393,171.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhZBhQglglAAg8QAAg7AjgjQAjgkA5AAQAuAAAfAXQAgAZAKAtQAEAQADAkIAAAIIizAAQAGAxAwAAQAYAAAPgPQAJgHAEgOIBFAVQgMAZgOAPQgjAjg8AAQg5AAgigjgAAzggQgJgngpAAQgqAAgKAnIBmAAIAAAAg");
	this.shape_55.setTransform(351.7,171.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("ABzB9QADgZAAgjIAAhSQAAgWgHgJQgIgKgQAAQghAAgRArIAABRQAAAhAEAaIhTAAQAEgXAAglIAAhSQAAgVgHgJQgHgLgPABQghgBgSAsIAABPQAAAjADAZIhSAAQADgYAAgkIAAh6QAAgngDgWIBPAAIAAARIAAAGIAAACIAAABQAdggAvAAQAfAAATAOQAJAIAIAMQAjgiAwgBQBXAAAABcIAABjQAAAiADAZg");
	this.shape_56.setTransform(316.1,170.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AhkBqQgWgUAAgiQAAgmAdgUQAegVA1gFQAPgBAogBIAAgKQAAgcgmAAQgjAAgJAcIhMgMQALggAWgQQAhgXA4AAQAxAAAaAOQAkAUABA0IAABrQAAAfACAaIhOAAIAAgTQgeAYguAAQguAAgXgWgAgWAYQgYAIAAASQABAXAgAAQAaAAASgPQAOgNAAgSIAAgLQguABgVAHg");
	this.shape_57.setTransform(279.7,171.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AArB9QADgaAAgjIAAhRQAAgUgHgJQgIgLgSAAQghAAgZAqIAABPQAAAhADAcIhTAAQADgZAAgkIAAh6QAAgngDgVIBQAAIAAARIgBALQAkgiAuAAQAqAAAWAXQAXAWAAAsIAABkQAAAhADAbg");
	this.shape_58.setTransform(251.5,171);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhZBhQglglAAg8QAAg7AjgjQAjgkA4AAQAwAAAeAXQAgAZALAtQADAQACAkIABAIIizAAQAGAxAvAAQAZAAAQgPQAIgHADgOIBGAVQgLAZgPAPQgjAjg7AAQg6AAgigjgAAzggQgJgngqAAQgpAAgKAnIBmAAIAAAAg");
	this.shape_59.setTransform(223,171.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AArCmQADgZAAgjIAAhSQAAgVgHgIQgIgLgRAAQgiAAgZApIAABRQAAAhADAbIhTAAQADgZAAgjIAAjTQAAgngDgWIBTAAQgDAYAAAlIAAArIgBAMQAjggAvAAQAqAAAWAWQAXAWAAAsIAABlQAAAgADAbg");
	this.shape_60.setTransform(194.6,166.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgUCPQgWgQAAglIAAh5IgOAAQgSAAgRADIAAhDQARACATAAIANAAIAAgIQAAgegDgZIBRAAQgDAaAAAdIAAAIIAOAAQAYAAAQgCIAABDQgTgDgSAAIgRAAIAABmQAAAPAHAFQAHAEAMAAQAOAAAOgHIAFA9QgZAIgeAAQgnAAgSgOg");
	this.shape_61.setTransform(170.3,168.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AhjB8QAEgaAAgiIAAh6QAAgmgEgXIBQAAIAAAgQAbgkA0AAQARAAAXAEIgUBIQgZgHgPAAQgfAAgQAWQgKAMgCAWIAAA/QAAAhADAag");
	this.shape_62.setTransform(137.3,171);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhZBhQglglAAg8QAAg7AjgjQAjgkA4AAQAwAAAeAXQAgAZALAtQADAQACAkIABAIIizAAQAGAxAvAAQAZAAAQgPQAIgHADgOIBGAVQgLAZgPAPQgjAjg7AAQg6AAgigjgAAzggQgJgngqAAQgpAAgKAnIBmAAIAAAAg");
	this.shape_63.setTransform(111.4,171.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgUCPQgWgQABglIAAh5IgPAAQgSAAgSADIAAhDQASACASAAIAPAAIAAgIQgBgegDgZIBRAAQgDAaAAAdIAAAIIAPAAQAXAAAQgCIAABDQgSgDgTAAIgRAAIAABmQAAAPAHAFQAHAEAMAAQAOAAAOgHIAGA9QgaAIgeAAQgnAAgSgOg");
	this.shape_64.setTransform(88,168.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AArB9QADgaAAgjIAAhRQAAgUgHgJQgIgLgSAAQghAAgZAqIAABPQAAAhADAcIhTAAQADgZAAgkIAAh6QAAgngDgVIBQAAIAAARIgBALQAkgiAuAAQAqAAAWAXQAXAWAAAsIAABkQAAAhADAbg");
	this.shape_65.setTransform(63.9,171);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AA7CmIh9AAIg6ABQADgVAAglIAAjZQAAghgDgaIA6ABIB/AAQAhAAAagCIAABKQgZgCgiAAIhnAAIAAA7IBVAAQAgAAAcgDIAABIQgagCgiAAIhVAAIAABDIBmAAQApAAAYgDIAABLQgYgDgqAAg");
	this.shape_66.setTransform(35,166.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgyCZIAAhmIBkAAIAABmgAgygzIAAhkIBkAAIAABkg");
	this.shape_67.setTransform(321.1,125.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF3333").s().p("Ah4B4QgsgtAAhLQAAhLAsgsQAtgsBLAAQBLAAAuAsQAsAsAABLQAABJgtAuQguAthKAAQhLAAgtgsgAgyhBQgSAYAAApQAAApASAXQASAYAgAAQAhAAASgXQARgXAAgqQAAgpgRgYQgSgXghAAQgfAAgTAXg");
	this.shape_68.setTransform(295.6,125.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF3333").s().p("AiECqQgogsAAhLQAAhOArgsQAngnA/ABQA3gBAvAmIgBgTIAAgqQAAgxgEgeIBnAAQgFAdAAAyIAAECQAAAuAFAhIhjAAIAAgQIABgLQgZAUgXAIQgWAHgeABQhEAAgngrgAg4gKQgSAVgBAoQAAArAYAXQASATAeAAQAhAAAVgZQAWgYAAglQAAglgWgWQgVgYgiAAQggAAgUAXg");
	this.shape_69.setTransform(257.9,120.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF3333").s().p("Ah3B4QgtgtAAhLQAAhLAtgsQAtgsBKAAQBMAAAsAsQAtAsAABLQAABJguAuQgtAthKAAQhLAAgsgsgAgyhBQgTAYAAApQAAApATAXQASAYAgAAQAgAAATgXQASgXAAgqQAAgpgSgYQgTgXgfAAQggAAgTAXg");
	this.shape_70.setTransform(204.7,125.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF3333").s().p("AgaCzQgagUAAguIAAiYIgTAAQgWAAgVADIAAhTQAVADAXAAIASAAIAAgLQAAglgEgfIBlAAQgEAhAAAjIAAALIASAAQAeAAATgDIAABTQgWgDgYAAIgVAAIAAB/QAAAUAJAGQAIAFAPAAQASAAARgJIAIBMQghAKgkAAQgyAAgXgRg");
	this.shape_71.setTransform(174.8,121.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF3333").s().p("AA0CZQgEgUgMgnIgehjIgGgTIgFATIgeBjQgMAmgEAVIhVAAQgEgYgLgjIg4i1IgWhAIBrAAQACAYAIAiIAVBaIAFAXIAHgXIAchbIAQg5IBIAAQADATAMAmIAdBeIAGAUIAEgUIAVhYQAJgnACgYIBrAAIgWBAIg4C1QgLAjgEAYg");
	this.shape_72.setTransform(122.9,125.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF3333").s().p("Ah4B4QgsgtAAhLQAAhLAsgsQAugsBKAAQBMAAAsAsQAtAsAABLQAABJguAuQgtAthKAAQhLAAgtgsgAgyhBQgTAYAAApQAAApATAXQATAYAfAAQAhAAARgXQATgXgBgqQABgpgTgYQgSgXgfAAQghAAgSAXg");
	this.shape_73.setTransform(81.7,125.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF3333").s().p("ABQDQQAEgcAAguIAAhhIinAAIAABhQAAAsAEAeIhsAAQAEgbAAgvIAAkLQAAgtgEgdIBsAAQgEAgAAAqIAABTICnAAIAAhTQAAgwgEgaIBsAAQgEAbAAAvIAAELQAAAqAEAgg");
	this.shape_74.setTransform(41.9,119.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF9933").s().p("EgvEAjcQiEhFhdiAQhah8giiWQggiQAVicQAUiVBCiNIAnhRQAXgwALgjQAQg1AEhCQADg0gFhFQgEg2gVigQgRiGgChRQgBhcAQiQQAWjFADgmIAJj1QAFiUAThgQAXhfAKgwQAShUgEg8QgDg1gWhKQgbhTgLgqQgliHAJiLQAKiPA5h8QA6h/BmhfQBohiCBgtQBbggB1gJQBUgGCCAEQDAAGEUAYIHUApQI2AuFwgiQAngEAVgEQAhgGAYgMQAZgLAcgXIAxgpQCSh+C3g8QCWgxC0gEQCZgDC4AcIBfAOQA3AGApgFQAfgDArgLIBJgUQDrg7D0BKQDzBKCiC1QATAWAIAHQARAQAQAGQAlAPAvgVQAbgNA1gnQCmh6DUgOQDYgPCsBpQBqBABVBrQBMBgA4B+QBTC8AGC8QAHDQhcCfQhiCojQB0QBkCTAoCxQAoCxgcCwQgbCuhbCdQhcCciLBuQBnCCA2C/QAqCUASDUQAMCJgEBhQgFCAggBmQgmB5hSBmQhRBmhtBAQhuBBiAAVQiBAVh9gZQgbgFhMgVQhBgSgngGQhJgMhhAHQgZACiRAQQmDArp3gkQlUgWirgJQklgPjYADQi8ACjrARQiHAKkgAaQkgAaiQAQQjwAbi+AhQiXAbhLAMQiDAVhgAFQggABgeAAQjgAAifhUg");
	this.shape_75.setTransform(293.9,199.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[]},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.4,206.6,531.3,386.9);
// library properties:
lib.properties = {
	id: 'C13A4C5647494BCF9222EFC57CFEAB77',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/starbutton.jpg?1531808517164", id:"starbutton"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C13A4C5647494BCF9222EFC57CFEAB77'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Virtual camera API : 

AdobeAn.VirtualCamera = new function() {
	var _camera = new Object();
	function VirtualCamera(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined )
	{
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VirtualCamera.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VirtualCamera.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VirtualCamera.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VirtualCamera.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VirtualCamera.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VirtualCamera.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VirtualCamera.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VirtualCamera.prototype.resetZoom = function() {
	this.setZoom(100);
};

VirtualCamera.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VirtualCamera.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VirtualCamera.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VirtualCamera.prototype.resetRotation = function() {
this.setRotation(0);
};

VirtualCamera.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VirtualCamera.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VirtualCamera.prototype.getZDepth = function() {
	return this.camera.depth;
}
VirtualCamera.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VirtualCamera.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VirtualCamera.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
if(this.camera.pinToObject != undefined) {
this.camera.pinToObject.pinOffsetX = offsetX;
this.camera.pinToObject.pinOffsetY = offsetY;
this.camera.pinToObject.pinOffsetZ = offsetZ;
}
};

VirtualCamera.prototype.unpinCamera = function() {
this.camera.pinToObject = undefined;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VirtualCamera(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
VirtualCamera.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;