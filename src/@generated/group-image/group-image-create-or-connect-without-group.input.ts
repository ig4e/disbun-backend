import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupImageWhereUniqueInput } from './group-image-where-unique.input';
import { Type } from 'class-transformer';
import { GroupImageCreateWithoutGroupInput } from './group-image-create-without-group.input';

@InputType()
export class GroupImageCreateOrConnectWithoutGroupInput {

    @Field(() => GroupImageWhereUniqueInput, {nullable:false})
    @Type(() => GroupImageWhereUniqueInput)
    where!: GroupImageWhereUniqueInput;

    @Field(() => GroupImageCreateWithoutGroupInput, {nullable:false})
    @Type(() => GroupImageCreateWithoutGroupInput)
    create!: GroupImageCreateWithoutGroupInput;
}
