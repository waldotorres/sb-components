import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title:'UI/MyLabel',
    component:MyLabel,
    argTypes:{
        color:{ control:'select' },
        fontColor: { control:'color' }
    }
} as ComponentMeta<typeof MyLabel>




const Template:ComponentStory<typeof MyLabel> = (args )=> <MyLabel {...args}  />

export const Basic = Template.bind({});
Basic.args={
    label:"Basic Label",
    size:"h3"
}
export const AllCaps = Template.bind({
    allcaps:true
});

export const Secondary = Template.bind({
    label:'My secondary label',
    color:'secondary'
});

export const Tertiary = Template.bind({
    label:'My tertiary label',
    color:'tertiary'
});

export const CustomFontColor = Template.bind({
    label:'Custom font color',
    fontColor:'#000000'
});