import { Tooltip as ReactTooltip } from 'react-tooltip';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

import css from './HeroForm.module.css';
import { Button } from 'components';

import { schemaCreate, schemaUpdate, useModal } from 'helpers';
import { useDispatch, useSelector } from 'react-redux';
import { selectCharacter } from 'myRedux/characters/selectors.js';
import { addCharacter, updateCharacter } from 'myRedux/characters/operations.js';
import { useRef } from 'react';

export function HeroForm() {
  const inputFileRef = useRef(null);
  const character = useSelector(selectCharacter);
  const { modal, setModal } = useModal();
  const dispatch = useDispatch();

  const type = modal.type === 'edit';
  const required = type ? '' : '*';
  const defaultValues = type ? character : {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(type ? schemaUpdate : schemaCreate),
    defaultValues,
    shouldUnregister: true,
  });

  function onSubmit(data) {
    console.log('Form Data:', data);

    const formData = new FormData();

    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    const files = inputFileRef.current.files;
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }
    // console.log(formData);
    if (type) {
      dispatch(updateCharacter({ _id: character._id, formData }));
    } else {
      dispatch(addCharacter(formData));
    }

    setModal({
      isOpen: false,
      type: 'create',
    });
  }

  return (
    <form className={css.container} onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
      <h3 className={css.header}>Add new superhero</h3>
      <input
        className={css.field}
        {...register('nickname')}
        type="text"
        placeholder={'Nickname' + required}
        data-tooltip-id="my-tooltip-nickname"
      />
      <ReactTooltip
        id="my-tooltip-nickname"
        place="top-end"
        variant={errors.name ? 'error' : 'dark'}
        content={errors.name ? errors.name.message : 'You must write you real name'}
      />

      <input
        className={css.field}
        {...register('real_name')}
        type="text"
        placeholder={'Real name' + required}
        data-tooltip-id="my-tooltip-real-name"
      />
      <ReactTooltip
        id="my-tooltip-real-name"
        place="top-end"
        variant={errors.name ? 'error' : 'dark'}
        content={errors.name ? errors.name.message : 'You must write you real name'}
      />

      <textarea
        className={clsx(css.field, css.comment)}
        {...register('origin_description')}
        placeholder={'Origin description' + required}
        data-tooltip-id="my-tooltip-origin-description"
      ></textarea>
      <ReactTooltip
        id="my-tooltip-origin-description"
        place="top-end"
        content={
          errors.name ? errors.name.message : 'You must write origin description by character'
        }
      />

      <textarea
        className={clsx(css.field, css.comment)}
        {...register('superpowers')}
        placeholder={'Superpowers' + required}
        data-tooltip-id="my-tooltip-superpowers"
      ></textarea>
      <ReactTooltip
        id="my-tooltip-superpowers"
        place="top-end"
        variant={errors.name ? 'error' : 'dark'}
        content={
          errors.name ? errors.name.message : 'You must describe catch phrase this character'
        }
      />

      <textarea
        className={clsx(css.field, css.comment)}
        {...register('catch_phrase')}
        placeholder={'Catch phrase' + required}
        data-tooltip-id="my-tooltip-catch-phrase"
      ></textarea>
      <ReactTooltip
        id="my-tooltip-catch-phrase"
        place="top-end"
        variant={errors.name ? 'error' : 'dark'}
        content={errors.name ? errors.name.message : 'You must write catch phrase this character'}
      />
      <input
        className={clsx(css.field, css.images)}
        ref={inputFileRef}
        type="file"
        accept=".jpg,.jpeg,.png,.webp"
        multiple
      />

      <Button value="Send" type="submit" />
    </form>
  );
}
