import { bool, string } from 'prop-types';

import classes from './TableNoticeHeader.module.css';
import { IconComponent, Tag } from '@/components';

export function TableNoticeHeader({
  additional,
  noticeTitle,
  isNoticeTag,
  isSecret,
}) {
  function addColumn(additional) {
    if (additional) {
      return (
        <>
          <td>{'칼리'}</td>
          <td>
            <time dateTime={'2023-03-15'}>{'2023.03.15'}</time>
          </td>
          <td>{'-'}</td>
        </>
      );
    }
  }

  function addNoticeTag(isNoticeTag) {
    if (isNoticeTag) {
      return (
        <Tag className={classes.tag} tagType="noticeTag">
          {'공지'}
        </Tag>
      );
    }
  }

  function addSecretTitle(isSecret) {
    if (isSecret) {
      return (
        <span className={classes.secretTitle}>
          비밀글입니다.
          <IconComponent data-image="lock" />
        </span>
      );
    }

    return <>{noticeTitle}</>;
  }

  return (
    <tr className={classes.colSpanCell}>
      <td colSpan={additional ? null : 4}>
        <button className={classes.title} type="button">
          {addNoticeTag(isNoticeTag)}
          {addSecretTitle(isSecret)}
        </button>
      </td>
      {addColumn(additional)}
    </tr>
  );
}

TableNoticeHeader.defaultProps = {
  additional: false,
  noticeTitle: '제목을 입력하세요.',
  isNoticeTag: true,
  isSecret: false,
};

TableNoticeHeader.propTypes = {
  additional: bool,
  noticeTitle: string,
  isNoticeTag: bool,
  isSecret: bool,
};
