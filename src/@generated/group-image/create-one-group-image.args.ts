import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupImageCreateInput } from './group-image-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGroupImageArgs {

    @Field(() => GroupImageCreateInput, {nullable:false})
    @Type(() => GroupImageCreateInput)
    data!: GroupImageCreateInput;
}
