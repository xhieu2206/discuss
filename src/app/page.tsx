import { Button } from '@nextui-org/react';
import * as actions from '@/actions';

export default function Home() {
  return (
    <div>
      <form action={actions.signIn}>
        <Button>Sign In</Button>
      </form>

      <form action={actions.signOut}>
        <Button>Sign Out</Button>
      </form>
    </div>
  );
}
