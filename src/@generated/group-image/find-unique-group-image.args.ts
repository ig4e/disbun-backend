import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupImageWhereUniqueInput } from './group-image-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueGroupImageArgs {

    @Field(() => GroupImageWhereUniqueInput, {nullable:false})
    @Type(() => GroupImageWhereUniqueInput)
    where!: GroupImageWhereUniqueInput;
}
