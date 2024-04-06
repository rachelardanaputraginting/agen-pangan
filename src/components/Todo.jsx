import { useState } from 'react';
import Button from './Button';
import Cart from './Cart';
import Input from './Input';
import { IconCheck, IconX } from '@tabler/icons-react';
import { comma } from 'postcss/lib/list';

export default function Todo() {
    const [newTask, setNewTask] = useState('');
    const [task, setTask] = useState('');

    function handleAddTask(e) {
        e.preventDefault();
        setTask((prevTask) => [
            ...prevTask,
            {
                id: Math.floor(Math.random() * Date.now()),
                name: newTask,
                complete: false,
            },
        ]);

        setNewTask('');
    }

    function handleCompleteTask(id) {
        const updateTask = task.map((ts) => {
            if (id === ts.id) {
                return {
                    ...ts,
                    complete: !ts.complete,
                };
            }

            return ts;
        });
        setTask(updateTask);
    }

    function handleRemoveTask(id) {
        const removeTask = task.filter((task) => task.id !== id);
        setTask(removeTask);
    }

    return (
        <Cart>
            <Cart.Title>Todo</Cart.Title>

            <Cart.Body>
                <form>
                    <div className='flex items-center gap-x-2'>
                        <Input
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                        />
                        <Button
                            text='Add Task'
                            onClick={handleAddTask}
                            className='bg-black text-white'
                        />
                    </div>
                </form>
                {task.length > 0 ? (
                    <ol className='space-y-2 mt-4'>
                        {task.map((ts, index) => (
                            <li
                                key={index}
                                className='flex items-center justify-between'
                            >
                                <span className='flex gap-x-2'>
                                    {ts.name}{' '}
                                    {ts.complete ? <IconCheck /> : <IconX />}
                                </span>
                                <div className='flex items-center gap-x-2'>
                                    <button
                                        onClick={() =>
                                            handleCompleteTask(ts.id)
                                        }
                                        className='px-2 py-1 border text-xs'
                                    >
                                        Mask as{' '}
                                        {!ts.complete
                                            ? 'complete'
                                            : 'incomplete'}
                                    </button>
                                    <button
                                        onClick={() => handleRemoveTask(ts.id)}
                                        className='px-2 py-1 border text-xs'
                                    >
                                        remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ol>
                ) : null}
            </Cart.Body>
            <Cart.Footer>You have {task.length} tasks</Cart.Footer>
        </Cart>
    );
}
