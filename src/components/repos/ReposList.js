import React, { memo} from 'react';
import RepoItem from './RepoItem';
const ReposList = ({repos}) => {

    return <div className='p-3 rounded-lg shadow-lg card '>
        <div className='card-body'>
            <h3 className='card-title text-3xl my-4 font-bold'>
                Latest Repositories
            </h3>
            {repos.map(repo => <RepoItem repo={repo} key={repo.id}/>)}
        </div>

    </div>

}

export default memo(ReposList);