import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageAttatchmentCreateManyInput } from './message-attatchment-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMessageAttatchmentArgs {

    @Field(() => [MessageAttatchmentCreateManyInput], {nullable:false})
    @Type(() => MessageAttatchmentCreateManyInput)
    data!: Array<MessageAttatchmentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
