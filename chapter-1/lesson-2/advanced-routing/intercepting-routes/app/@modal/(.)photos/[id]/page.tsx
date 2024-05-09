import { Modal } from './modal';

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Photo {photoId}
        </h2>
        <p className="text-gray-600 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
          metus vitae urna bibendum tempor.
        </p>
      </div>
    </Modal>
  );
}