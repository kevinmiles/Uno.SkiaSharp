/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_shader_new_two_point_conical_gradient_0_Return
	{
		/* Pack=4 */
		start : SkiaSharp.SKPoint;
		end : SkiaSharp.SKPoint;
		matrix : SkiaSharp.SKMatrix;
		public constructor()
		{
			this.start = new SkiaSharp.SKPoint();
			this.end = new SkiaSharp.SKPoint();
			this.matrix = new SkiaSharp.SKMatrix();
		}
		public marshalNew(memoryContext: any = null) : number
		{
			memoryContext = memoryContext ? memoryContext : Module;
			var pTarget = memoryContext._malloc(52);
			this.marshal(pTarget, memoryContext);
			return pTarget;
		}
		public marshal(pData:number, memoryContext: any = null)
		{
			memoryContext = memoryContext ? memoryContext : Module;
			this.start.marshal(pData + 0);
			this.end.marshal(pData + 8);
			this.matrix.marshal(pData + 16);
		}
	}
}
