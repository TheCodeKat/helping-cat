// YourComponent.stories.ts

import { Meta, Story } from '@storybook/angular';
import { Todo } from 'src/app/todo.model';

import { TodoItemComponent } from '../app/todo-item/todo-item.component';

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'To-do Item',
  component: TodoItemComponent,
} as Meta;

//π We create a βtemplateβ of how args map to rendering
const Template: Story = (args) => ({
  props: args,
});

export const Pending = Template.bind({});
Pending.args = {
  //π The args you need here will depend on your component
  todo: <Todo>{
    name: 'Put my clothes in their place',
    done: false,
  },
};

export const Done = Template.bind({});
Done.args = {
  //π The args you need here will depend on your component
  todo: <Todo>{
    name: 'Put my clothes in their place',
    done: true,
  },
};
