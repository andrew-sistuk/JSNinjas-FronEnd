import css from './CharactersList.module.css';
import { useSelector } from 'react-redux';
import { selectCharacters } from 'myRedux';
import { Character } from 'components';

export function CharactersList() {
  const characters = useSelector(selectCharacters);

  return (
    <ul className={css.characters}>
      {characters.map(({ _id, nickname, images }) => (
        <Character key={_id} id={_id} name={nickname} images={images}></Character>
      ))}
    </ul>
  );
}
