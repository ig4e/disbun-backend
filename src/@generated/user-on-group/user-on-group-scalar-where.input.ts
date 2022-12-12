import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserOnGroupScalarWhereInput {

    @Field(() => [UserOnGroupScalarWhereInput], {nullable:true})
    AND?: Array<UserOnGroupScalarWhereInput>;

    @Field(() => [UserOnGroupScalarWhereInput], {nullable:true})
    OR?: Array<UserOnGroupScalarWhereInput>;

    @Field(() => [UserOnGroupScalarWhereInput], {nullable:true})
    NOT?: Array<UserOnGroupScalarWhereInput>;

    @Field(() => BoolFilter, {nullable:true})
    owner?: BoolFilter;

    @HideField()
    groupId?: StringFilter;

    @HideField()
    userId?: StringFilter;
}
