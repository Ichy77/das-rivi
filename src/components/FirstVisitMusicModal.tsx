import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAudio } from "@/contexts/AudioContext";
import { useTranslation } from 'react-i18next';
import { Music } from 'lucide-react';

interface FirstVisitMusicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FirstVisitMusicModal: React.FC<FirstVisitMusicModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { isPlaying, togglePlayPause } = useAudio();

  const handleStartMusic = () => {
    if (!isPlaying) {
      togglePlayPause();
    }
    onClose(); // Close modal and set 'hasVisited' in App.tsx
  };

  const handleClose = () => {
    onClose(); // Close modal and set 'hasVisited' in App.tsx
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-[425px] bg-black/90 border-rivi-gold/50 text-white">
        <DialogHeader>
          <DialogTitle className="text-rivi-gold flex items-center gap-2">
            <Music size={20} />
            {t('firstVisitModal.title')}
          </DialogTitle>
          <DialogDescription className="text-white/80 pt-2">
            {t('firstVisitModal.description')}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4 sm:justify-end gap-2">
          <Button
            variant="outline"
            onClick={handleClose}
            className="text-rivi-gold border-rivi-gold/50 hover:bg-rivi-gold/10 hover:text-white"
          >
            {t('firstVisitModal.closeButton')}
          </Button>
          <Button
            onClick={handleStartMusic}
            className="bg-rivi-gold text-black hover:bg-rivi-gold/90"
          >
            {t('firstVisitModal.startButton')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FirstVisitMusicModal; 