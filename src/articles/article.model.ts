/*
 * @Author: 邹威鹏(944740645@qq.com)
 * @remarks:
 */
import { getModelForClass, prop } from '@typegoose/typegoose';
export class Acticle {
  @prop()
  title: string;
  @prop()
  content: string;
}

export const acticleModel = getModelForClass(Acticle);
