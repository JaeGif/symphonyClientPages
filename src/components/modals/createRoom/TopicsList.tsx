import Topic from './Topic';
type TopicsListProps = {
  handleTopicSelection: Function;
};
const baseURL = import.meta.env.VITE_BASE_URL;

function TopicsList({ handleTopicSelection }: TopicsListProps) {
  return (
    <div className='h-full overflow-scroll w-full'>
      <Topic
        handleTopicSelection={handleTopicSelection}
        title='Generic'
        icon={`${baseURL}/assets/favicons/Generic.png`}
      />
      <p className='text-gray-500 m-2'>COMMON TOPICS</p>
      <Topic
        handleTopicSelection={handleTopicSelection}
        title='Gaming'
        icon={`${baseURL}/assets/favicons/Gaming.png`}
      />
      <Topic
        handleTopicSelection={handleTopicSelection}
        title='Club'
        icon={`${baseURL}/assets/favicons/Club.png`}
      />
      <Topic
        handleTopicSelection={handleTopicSelection}
        title='Study'
        icon={`${baseURL}/assets/favicons/Study.png`}
      />
      <Topic
        handleTopicSelection={handleTopicSelection}
        title='Friends'
        icon={`${baseURL}/assets/favicons/Friends.png`}
      />
      <Topic
        handleTopicSelection={handleTopicSelection}
        title='Artists'
        icon={`${baseURL}/assets/favicons/Artists.png`}
      />
      <Topic
        handleTopicSelection={handleTopicSelection}
        title='Community'
        icon={`${baseURL}/assets/favicons/Community.png`}
      />
    </div>
  );
}

export default TopicsList;
