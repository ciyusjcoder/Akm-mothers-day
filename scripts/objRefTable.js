const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.jumpthru,
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Behaviors.Tween,
		C3.Plugins.Audio,
		C3.Plugins.Particles,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.Spawn
	];
};
self.C3_JsPropNameTable = [
	{Jumpthru: 0},
	{TiledBackground: 0},
	{Solid: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Platform: 0},
	{ScrollTo: 0},
	{BoundToLayout: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Tween: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{Sprite13: 0},
	{Audio: 0},
	{Particles: 0},
	{Sprite14: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Particles: class extends self.IParticlesInstance {},
	Sprite14: class extends self.ISpriteInstance {}
}