import { Controller } from 'react-hook-form';
import { useForm } from '@refinedev/react-hook-form'
import { Button, TextField } from "@mui/material";

export default function WorkspaceCreate() {
  const { refineCore, control, handleSubmit } = useForm({
    refineCoreProps: {
      // resource: 'workspaces/create', // SHOULD BE DETECTED AUTOMATICALLY
    },
  });

  return (
    <div>
      WORKSPACE SETUP

      <form onSubmit={handleSubmit(refineCore.onFinish)}>
        <div key={'name'}>
          <Controller
            control={control}
            name={'name'}
            render={({ field: {value, ...rest} }) => (
              <TextField
                id={`workspace-name`} 
                label={'Workspace Name'} 
                variant="outlined"
                placeholder={'Enter your workspace name?'}
                {...rest}
                />
            )}
          />
        </div>

        <Button disabled={refineCore.formLoading} variant="contained" type="submit">Submit</Button>
      </form>
    </div>
  );
}

WorkspaceCreate.noLayout = true;
