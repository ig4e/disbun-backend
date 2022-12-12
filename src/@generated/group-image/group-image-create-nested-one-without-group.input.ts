import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupImageCreateWithoutGroupInput } from './group-image-create-without-group.input';
import { Type } from 'class-transformer';
import { GroupImageCreateOrConnectWithoutGroupInput } from './group-image-create-or-connect-without-group.input';
import { GroupImageWhereUniqueInput } from './group-image-where-unique.input';

@InputType()
export class GroupImageCreateNestedOneWithoutGroupInput {

    @Field(() => GroupImageCreateWithoutGroupInput, {nullable:true})
    @Type(() => GroupImageCreateWithoutGroupInput)
    create?: GroupImageCreateWithoutGroupInput;

    @Field(() => GroupImageCreateOrConnectWithoutGroupInput, {nullable:true})
    @Type(() => GroupImageCreateOrConnectWithoutGroupInput)
    connectOrCreate?: GroupImageCreateOrConnectWithoutGroupInput;

    @Field(() => GroupImageWhereUniqueInput, {nullable:true})
    @Type(() => GroupImageWhereUniqueInput)
    connect?: GroupImageWhereUniqueInput;
}
