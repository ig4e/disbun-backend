import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupImageWhereInput } from './group-image-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGroupImageArgs {

    @Field(() => GroupImageWhereInput, {nullable:true})
    @Type(() => GroupImageWhereInput)
    where?: GroupImageWhereInput;
}
