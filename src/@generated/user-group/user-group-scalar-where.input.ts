import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class UserGroupScalarWhereInput {

    @Field(() => [UserGroupScalarWhereInput], {nullable:true})
    AND?: Array<UserGroupScalarWhereInput>;

    @Field(() => [UserGroupScalarWhereInput], {nullable:true})
    OR?: Array<UserGroupScalarWhereInput>;

    @Field(() => [UserGroupScalarWhereInput], {nullable:true})
    NOT?: Array<UserGroupScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ChannelDmId?: StringFilter;
}
